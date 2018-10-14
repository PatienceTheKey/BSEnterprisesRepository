using System.Threading.Tasks;
using BSEnterprises.Domain.BillingSpareParts;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.Persistence.Repositories
{
    public class BillingSparePartRepository   : RepositoryBase<BillingSparePart>, IBillingSparePartRepository
    {
        private readonly ApplicationDbContext _context;

        public BillingSparePartRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public override Task<BillingSparePart> GetAllAsync(object id)
        {
            throw new System.NotImplementedException();
        }

        public override Task<BillingSparePart> GetAsync(object id,string userId)
        {
            return _context.BillingSpareParts.Include(or => or.BillingSparePartItems).SingleOrDefaultAsync(or => or.Id == (int)id);
        }
        // public override Task<BillingSparePart> GetAllAsync(object id)
        // {
        //     throw new NotImplementedException();
        // }

        // public override Task<Order> GetAsync(object id)
        // {
        //     return _context.Orders.Include(or => or.OrderItems).SingleOrDefaultAsync(or => or.Id == (int)id);
        // }
    }
}

