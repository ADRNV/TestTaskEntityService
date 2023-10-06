using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EntityService.Infrastructure.Entityes.Configuration
{
    public class EntityFaceConfiguration : IEntityTypeConfiguration<EntityFace>
    {
        public void Configure(EntityTypeBuilder<EntityFace> builder)
        {
            builder.HasKey(e => e.Id);

            builder.HasMany(e => e.BankProps)
                .WithOne(e => e.EntityFace);
        }
    }
}
