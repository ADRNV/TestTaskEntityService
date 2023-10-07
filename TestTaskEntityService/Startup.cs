using MediatR;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using System.Reflection;
using System.Security.Claims;
using TestTaskEntityService.Middlewares;
using TestTaskEntityService.Validation;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using EntityService.Infrastructure;
using Microsoft.OpenApi.Models;

namespace TestTaskEntityService
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<OrganizationContext>(options =>
            {
                options.UseSqlServer(_config.GetConnectionString("ApiUserDbConnection"));
            });

            services.AddAutoMapper(c =>
            {
            
            }, Assembly.GetExecutingAssembly());

            services.AddMediatR(c => Assembly.GetExecutingAssembly());

            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationPipelineBehavior<,>));

            services.AddRouting();

            services.AddMvc();

            services.AddSwaggerGen(c =>
            {
                c.SupportNonNullableReferenceTypes();

                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Entityes API", Version = "v1" });

                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);

                c.IncludeXmlComments(xmlPath);
            });

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseMiddleware<ErrorHandlingMiddleware>();

            app.UseAuthentication();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Entity API");
            });

            app.UseRouting();

            app.UseSwagger();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
