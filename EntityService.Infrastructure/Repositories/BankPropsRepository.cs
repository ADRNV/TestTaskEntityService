using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace EntityService.Infrastructure.Repositories
{
    public class BankPropsRepository : RepositoryBase<CoreBankProp>
    {
        private readonly IMapper _mapper;

        public BankPropsRepository(OrganizationContext organizationContext, IMapper mapper) : base(organizationContext)
        {
            _mapper = mapper;
        }

        public override async Task Create(CoreBankProp entity)
        {
            var dbBankProp = MapToDb(entity);

            await _organizationContext.BankProps.AddAsync(dbBankProp);

            await Save(dbBankProp, EntityState.Added);
        }

        public override async Task Delete(CoreBankProp entity)
        {
            var dbBankProp = MapToDb(entity);

            _organizationContext.BankProps.Remove(dbBankProp);

            await Save(dbBankProp, EntityState.Deleted);
        }

        public override async Task<CoreBankProp?> Get(Guid id)
        {
            var dbBankProp = await _organizationContext.BankProps.FindAsync(new object[] { id });

            return MapToCore(dbBankProp);
        }

        public override async Task<IEnumerable<CoreBankProp>> Get(int page, int pageSize)
        {
            var entities = _organizationContext.BankProps
                .AsNoTracking()
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .AsEnumerable();

            return await Task.FromResult(_mapper.Map<IEnumerable<DbBankProp>, IEnumerable<CoreBankProp>>(entities));
        }

        public override async Task Update(CoreBankProp entity)
        {
            var dbEntity = MapToDb(entity);

            _organizationContext.Update(dbEntity);

            await Save(dbEntity, EntityState.Modified);
        }

        private DbBankProp MapToDb(CoreBankProp bankProp) =>
           _mapper.Map<CoreBankProp, DbBankProp>(bankProp);

        private CoreBankProp MapToCore(DbBankProp entityFace) =>
            _mapper.Map<DbBankProp, CoreBankProp>(entityFace);
    }
}
