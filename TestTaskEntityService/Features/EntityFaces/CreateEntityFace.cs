using EntityService.Core;
using EntityService.Core.Repositories;
using MediatR;

namespace TestTaskEntityService.Features.EntityFaces
{
    public class CreateEntityFace
    {
        public record Command(EntityFace EntityFace) : IRequest<Unit>;

        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly IEntityFacesRepository _entityFacesRepository;

            public Handler(IEntityFacesRepository entityFacesRepository)
            {
                _entityFacesRepository = entityFacesRepository;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                await _entityFacesRepository.Create(request.EntityFace);

                return await Unit.Task;
            }
        }
    }
}
