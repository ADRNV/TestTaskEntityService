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

        /// <summary>
        /// Получает организации в табличном предстваении
        /// </summary>
        /// <param name="page">"Страница" в БД</param>
        /// <param name="size">Кол-во сущностей на странице</param>
        /// <returns>Страница с указанными размерами содержащая <see cref="EntityFace"/></returns>
        [HttpGet("page")]
        public async Task<IEnumerable<EntityFace>> GetEntityFaces([FromQuery] int page, [FromQuery]int size)
        {
           return await _mediator.Send(new GetEntityFaces.Command(page, size));
        }

        /// <summary>
        /// Создает организацию(<see cref="EntityFace"/>)
        /// </summary>
        /// <param name="entityFace">Организация</param>
        /// <returns></returns>
        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody]EntityFace entityFace)
        {
            await _mediator.Send(new CreateEntityFace.Command(entityFace));

            return Ok();
        }

        /// <summary>
        /// Сохраняет документ привязывая его организации
        /// </summary>
        /// <param name="document">Документ организация</param>
        /// <param name="entityName"></param>
        /// <returns></returns>
        [HttpPost("uploaddocument")]
        public async Task<IActionResult> UploadDocument([FromForm] IEnumerable<IFormFile> document, [FromQuery] string entityName)
        {
            await _mediator.Send(new UploadDocument.Command(document, entityName));

            return Ok();
        }
    }
}
