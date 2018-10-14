using System.Linq;
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
    public class ReadModelDatabase : IReadModelDatabase
    {
        private readonly ApplicationDbContext _context;
        public ReadModelDatabase(ApplicationDbContext context)
        {
            _context = context;

        }
        public IQueryable<Company> Companies => _context.Companies.AsNoTracking();

        public IQueryable<Engineer> Engineers => _context.Engineers.AsNoTracking();
        public IQueryable<Product> Products => _context.Products.AsNoTracking();

        public IQueryable<SparePart> SpareParts => _context.SpareParts.AsNoTracking();
        public IQueryable<BillingSparePart> BillingSpareParts => _context.BillingSpareParts.AsNoTracking();
        public IQueryable<BillingSparePartItem> BillingSparePartItems => _context.BillingSparePartItems.AsNoTracking();

        public IQueryable<Order> Orders => _context.Orders.AsNoTracking();

        public IQueryable<OrderItem> OrderItems => _context.OrderItems.AsNoTracking();

        public DbSet<User> Users => _context.Users;
    }
}