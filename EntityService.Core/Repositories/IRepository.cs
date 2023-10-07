namespace EntityService.Core.Repositories
{
    public interface IRepository<T>
    {
        Task Create(T entity);

        Task Update(T entity);

        Task Delete(T entity);

        Task<T?> Get(Guid id);

        Task<IEnumerable<T>> Get(int page, int pageSize);
    }
}
