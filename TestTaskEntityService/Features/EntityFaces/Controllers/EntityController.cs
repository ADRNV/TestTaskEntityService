using EntityService.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;

namespace TestTaskEntityService.Features.EntityFaces.Controllers
{
    [ApiController]
    [Route("[controller]/api")]
    public class EntityController : ControllerBase
    {
        private IMediator _mediator;

        public EntityController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("page")]
        public async Task<IEnumerable<EntityFace>> GetEntityFaces([FromQuery] int page, [FromQuery]int size)
        {
           return await _mediator.Send(new GetEntityFaces.Command(page, size));
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromQuery]EntityFace entityFace)
        {
            await _mediator.Send(new CreateEntityFace.Command(entityFace));

            return Ok();
        }
    }
}
