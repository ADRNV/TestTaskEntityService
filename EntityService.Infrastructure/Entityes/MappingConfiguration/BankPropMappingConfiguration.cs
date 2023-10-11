using AutoMapper;

namespace EntityService.Infrastructure.Entityes.MappingConfiguration
{
    public class BankPropMappingConfiguration : Profile
    {
        public BankPropMappingConfiguration()
        {
            CreateMap<CoreBankProp, DbBankProp>()
                .ForMember(b => b.Id, o => o.Ignore())
                .ForMember(b => b.EntityFace, o => o.Ignore())
                .ReverseMap();
        }
    }
}
