namespace EntityService.Infrastructure.Entityes
{
    public class EntityFace
    {
        public Guid Id { get; set; }

        public string ActivityType { get; set; }

        public string TIN { get; set; }

        public string FullName { get; set; }

        public string ShortName { get; set; }

        public string MSRN { get; set; }

        public bool HasOffice { get; set; }

        public DateTime RegistrationDate { get; set; }

        public List<BankProp> BankProps { get; set; } = new();
    }
}
