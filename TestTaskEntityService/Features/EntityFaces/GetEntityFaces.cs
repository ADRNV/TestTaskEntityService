using EntityService.Core;
using EntityService.Core.Repositories;
using MediatR;

namespace TestTaskEntityService.Features.EntityFaces
{
    public class GetEntityFaces
    {
        public record Command(int Page, int Size): IRequest<IEnumerable<EntityFace>>;

        public class Handler : IRequestHandler<Command, IEnumerable<EntityFace>>
        {
            private readonly IEntityFacesRepository _entityFacesRepository;

            public Handler(IEntityFacesRepository entityFacesRepository)
            {
                _entityFacesRepository = entityFacesRepository;
            }

            public async Task<IEnumerable<EntityFace>> Handle(Command request, CancellationToken cancellationToken) =>
               await _entityFacesRepository.Get(request.Page, request.Size);
        }
    }
}
