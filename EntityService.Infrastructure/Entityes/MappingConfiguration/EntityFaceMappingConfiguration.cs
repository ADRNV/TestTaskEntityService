using AutoMapper;

namespace EntityService.Infrastructure.Entityes.MappingConfiguration
{
    public class EntityFaceMappingConfiguration : Profile
    {
        public EntityFaceMappingConfiguration() 
        {
            CreateMap<DbEntityFace, CoreEntityFace>()
                .ForMember(e => e.BIKs, o => o.Ignore())
                .ReverseMap()
                .ForMember(e => e.BankProps, o => o.MapFrom(e => e.BIKs));
        }
    }
}
