using EntityService.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace EntityService.Infrastructure.Repositories
{
    public abstract class RepositoryBase<T> : IRepository<T>
    {
        protected readonly OrganizationContext _organizationContext;

        public RepositoryBase(OrganizationContext organizationContext) 
        { 
            _organizationContext = organizationContext;
        }

        public abstract Task Create(T entity);

        public abstract Task Delete(T entity);

        public abstract Task<T?> Get(Guid id);
        
        public abstract Task<IEnumerable<T>> Get(int page, int pageSize);
        
        public abstract Task Update(T entity);

        protected virtual async Task Save<T>(T entity, EntityState entityState)
        { 
           _organizationContext.Entry(entity).State = entityState;

           await _organizationContext.SaveChangesAsync();   
        }
    }
}
