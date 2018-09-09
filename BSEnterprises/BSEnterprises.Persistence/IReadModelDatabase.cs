using System.Linq;
using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.Products;

namespace BSEnterprises.Persistence
{
    public interface IReadModelDatabase
    {
        IQueryable<Company> Companies { get; }
        IQueryable<Engineer> Engineers { get; }
        IQueryable<Product> Products { get; }
    }
}