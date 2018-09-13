using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.Products;
using BSEnterprises.Domain.SpareParts;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.Persistence
{
    public class ApplicationDbContext : DbContext
    {
       
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base((DbContextOptions)options)
        {
        }

      public DbSet<Company> Companies {get; set;}
      public DbSet<Engineer> Engineers {get; set;}
      public DbSet<Product> Products {get; set;}
      public DbSet<SparePart> SpareParts {get; set;}

    }
}