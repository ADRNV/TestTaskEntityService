namespace EntityService.Core.Repositories
{
    public interface IDocumentsRepository
    {
        Task Create(string fileName);

        Task Delete(string fileName);
    }
}
