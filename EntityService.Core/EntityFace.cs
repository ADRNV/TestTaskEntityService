namespace EntityService.Core
{
    public class EntityFace
    {
        public Guid Id { get; set; }
        public string ActivityType { get; set; }

        public string TIN { get; set; }

        public string MSRN { get; set; }

        public List<string> BIKs { get; set; }

        public bool HasOffice { get; set; }

        public DateOnly RegistrationDate { get; set; }
    }
}
