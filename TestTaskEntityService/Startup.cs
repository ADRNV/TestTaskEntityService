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
using EntityService.Core.Repositories;
using EntityService.Infrastructure.Repositories;
using EntityService.Infrastructure.Entityes.MappingConfiguration;

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
                options.UseSqlServer(_config.GetConnectionString("DbConnection"));
            });


            services.AddAutoMapper(c =>
            {
                c.AddProfile<EntityFaceMappingConfiguration>();
                c.AddProfile<BankPropMappingConfiguration>();
            }, Assembly.GetExecutingAssembly());

            services.AddScoped<IEntityFacesRepository, EntityFacesRepository>();

            services.AddScoped<IBankPropsRepository, BankPropsRepository>();

            services.AddMediatR(Assembly.GetExecutingAssembly());

            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationPipelineBehavior<,>));

            services.AddRouting();

            services.AddMvc();

            services.AddCors(c =>
            {
                c.AddPolicy("EntityClient", p =>
                {
                    p.AllowAnyOrigin();
                    p.AllowAnyHeader();
                    p.AllowAnyMethod();
                });
            });

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

            using (var scope =
                        app.ApplicationServices.CreateScope())
            using (var context = scope.ServiceProvider.GetService<OrganizationContext>())
                context.Database.EnsureCreated();

            app.UseCors("EntityClient");

            app.UseSwagger();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
