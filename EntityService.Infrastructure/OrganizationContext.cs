using Microsoft.EntityFrameworkCore;
using EntityService.Infrastructure.Entityes;
using EntityService.Infrastructure.Entityes.Configuration;

namespace EntityService.Infrastructure
{
    public class OrganizationContext : DbContext
    {
        public DbSet<EntityFace> EntityesFaces { get; set; }

        public DbSet<BankProp> BankProps { get; set; }

        public OrganizationContext(DbContextOptions options) : base(options)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new EntityFaceConfiguration());
        }
    }
}
