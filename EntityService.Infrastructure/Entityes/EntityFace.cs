﻿namespace EntityService.Infrastructure.Entityes
{
    public class EntityFace
    {
        public Guid Id { get; set; }

        public string ActivityType { get; set; }

        public string TIN { get; set; }

        public string MSRN { get; set; }

        public List<BankProp> BankProps { get; }
    }
}
