using AutoMapper;

namespace EntityService.Infrastructure.Entityes.MappingConfiguration
{
    public class BankPropMappingConfiguration : Profile
    {
        public BankPropMappingConfiguration()
        {
            CreateMap<CoreBankProp, DbBankProp>()
                .ForMember(b => b.EntityFace, o => o.Ignore());
        }
    }
}
