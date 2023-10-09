using AutoMapper;
using EntityService.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace EntityService.Infrastructure.Repositories
{
    public class EntityFacesRepository : RepositoryBase<CoreEntityFace>, IEntityFacesRepository
    {
        private readonly IMapper _mapper;

        public EntityFacesRepository(OrganizationContext organizationContext, IMapper mapper) : base(organizationContext)
        {
            _mapper = mapper;
        }

        public override async Task Create(CoreEntityFace entity)
        {
            var dbEntity = MapToDb(entity);

            await _organizationContext.EntityesFaces.AddAsync(dbEntity);

            await Save(dbEntity, EntityState.Added);
        }

        public override async Task Delete(CoreEntityFace entity)
        {
            var dbEntity = MapToDb(entity);

            _organizationContext.EntityesFaces.Remove(dbEntity);

            await Save(dbEntity, EntityState.Deleted);
        }

        public override async Task<CoreEntityFace?> Get(Guid id)
        {
            var dbEntity = await _organizationContext.EntityesFaces.FindAsync(new object[] { id });

            return MapToCore(dbEntity);
        }

        public override async Task<IEnumerable<CoreEntityFace>> Get(int page, int pageSize)
        {
            var entities = _organizationContext.EntityesFaces
                .AsNoTracking()
                .Include(e => e.BankProps)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .AsEnumerable();

            return await Task.FromResult(_mapper.Map<IEnumerable<DbEntityFace>, IEnumerable<CoreEntityFace>>(entities));
        }

        public override async Task Update(CoreEntityFace entity)
        {
            var dbEntity = MapToDb(entity);

            _organizationContext.EntityesFaces.Update(dbEntity);

            await Save(dbEntity, EntityState.Modified);
        }

        private DbEntityFace MapToDb(CoreEntityFace entityFace) =>
            _mapper.Map<CoreEntityFace, DbEntityFace>(entityFace);

        private CoreEntityFace MapToCore(DbEntityFace entityFace) =>
            _mapper.Map<DbEntityFace, CoreEntityFace>(entityFace);
    }
}
