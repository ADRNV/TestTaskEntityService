namespace EntityService.Core
{
    public class BankProp
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public int BIC { get; set; }

        public string SettlementCheck { get; set; }

        public string CorrespondentCheck { get; set; }
    }
}
