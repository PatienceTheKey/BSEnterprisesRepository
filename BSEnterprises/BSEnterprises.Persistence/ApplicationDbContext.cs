using BSEnterprises.Domain.BillingSpareParts;
using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.Orders;
using BSEnterprises.Domain.Products;
using BSEnterprises.Domain.SpareParts;
using BSEnterprises.Domain.UserModule;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.Persistence
{
    public class ApplicationDbContext : DbContext
    {
       
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base((DbContextOptions)options)
        {
        }
      public DbSet<User> Users { get; set; }
      public DbSet<Company> Companies {get; set;}
      public DbSet<Engineer> Engineers {get; set;}
      public DbSet<Product> Products {get; set;}
      public DbSet<SparePart> SpareParts {get; set;}
      public DbSet<BillingSparePart> BillingSpareParts {get; set;}
      public DbSet<BillingSparePartItem> BillingSparePartItems {get; set;}
      public DbSet<Order> Orders { get; set; }
      public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderItem>()
               .HasOne(fk => fk.Product)
               .WithMany(p => p.OrderItems)
               .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<OrderItem>()
              .HasOne(fk => fk.SparePart)
              .WithMany(p => p.OrderItems)
              .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<OrderItem>()
                .HasOne(fk => fk.Company)
                .WithMany(p => p.OrderItems)
                .OnDelete(DeleteBehavior.Restrict);

        }

    }
}