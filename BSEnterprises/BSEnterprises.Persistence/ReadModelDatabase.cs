using System.Linq;
using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.Orders;
using BSEnterprises.Domain.Products;
using BSEnterprises.Domain.SpareParts;
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

        public IQueryable<Order> Orders => _context.Orders.AsNoTracking();
    }
}