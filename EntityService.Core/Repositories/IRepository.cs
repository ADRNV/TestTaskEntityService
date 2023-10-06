namespace EntityService.Core.Repositories
{
    public interface IRepository<T>
    {
        Task Create();

        Task Update(T entity);

        Task Delete(T entity);

        Task Get<I>(I id);

        Task Get(int page, int pageSize);
    }
}
