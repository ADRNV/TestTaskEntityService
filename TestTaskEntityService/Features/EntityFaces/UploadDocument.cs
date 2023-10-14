using MediatR;

namespace TestTaskEntityService.Features.EntityFaces
{
    public class UploadDocument
    {
        public record Command(IEnumerable<IFormFile> Files, string EntityName) : IRequest<Unit>;

        /*Так же можно было бы реальзовать хранение файлов через MicrosoftGraph*/
        public class CommandHandler : IRequestHandler<Command, Unit>
        {
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                foreach (var formFile in request.Files)
                {
                    var path = Path.Combine(Environment.CurrentDirectory,
                        $"{formFile.FileName}_{request.EntityName}_{Guid.NewGuid()}");

                    using (var stream = new FileStream(path, FileMode.Create))
                        await formFile.CopyToAsync(stream);
                }

                return await Unit.Task;
            }
        }
    }
}
