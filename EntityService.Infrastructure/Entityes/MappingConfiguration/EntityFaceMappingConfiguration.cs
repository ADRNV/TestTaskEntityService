using AutoMapper;

namespace EntityService.Infrastructure.Entityes.MappingConfiguration
{
    public class EntityFaceMappingConfiguration : Profile
    {
        public EntityFaceMappingConfiguration() 
        {
            CreateMap<DbEntityFace, CoreEntityFace>()
                .ForMember(e => e.Id, o => o.Ignore())
                .ForMember(e => e.BIKs, o => o.Ignore())
                .ReverseMap()
                .ForMember(e => e.BankProps, o => o.Ignore());
        }
    }
}
