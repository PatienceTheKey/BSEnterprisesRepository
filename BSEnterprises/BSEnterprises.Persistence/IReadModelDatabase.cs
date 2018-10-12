











using System.Linq;
using BSEnterprises.Domain.BillingSpareParts;
using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.Orders;
using BSEnterprises.Domain.Products;
using BSEnterprises.Domain.SpareParts;

namespace BSEnterprises.Persistence
{
    public interface IReadModelDatabase
    {
        IQueryable<Company> Companies { get; }
        IQueryable<Engineer> Engineers { get; }
        IQueryable<Product> Products { get; }
        IQueryable<SparePart> SpareParts { get; }
        IQueryable<Order> Orders { get; }
        IQueryable<OrderItem> OrderItems {get;}
        IQueryable<BillingSparePart> BillingSpareParts { get; }
        IQueryable<BillingSparePartItem> BillingSparePartItems {get;}
 
    }
}