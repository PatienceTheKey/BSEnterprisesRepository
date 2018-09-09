using System.Threading.Tasks;
using BSEnterprises.Domain.Products;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.Persistence.Repositories
{
   public class ProductRepository : RepositoryBase<Product>, IProductRepository
    {
        private readonly ApplicationDbContext _context;
        public ProductRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;

        }
        public override Task<Product> GetAllAsync(object id)
        {
            throw new System.NotImplementedException();
        }

        public override Task<Product> GetAsync(object id )
        {
            

            return _context.Products.Include(si => si.ProductItems).SingleOrDefaultAsync(m => m.Id == (int)id);
        }
    }
}