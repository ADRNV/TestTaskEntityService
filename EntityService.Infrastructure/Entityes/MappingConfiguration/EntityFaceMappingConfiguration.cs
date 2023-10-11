using AutoMapper;

namespace EntityService.Infrastructure.Entityes.MappingConfiguration
{
    public class EntityFaceMappingConfiguration : Profile
    {
        public EntityFaceMappingConfiguration() 
        {
            CreateMap<CoreEntityFace, DbEntityFace>()
                .ForMember(e => e.Id, o => o.Ignore())
                .ForMember(e => e.BankProps, o => o.MapFrom(e => e.BankProps))
                .ReverseMap();
        }
    }
}
