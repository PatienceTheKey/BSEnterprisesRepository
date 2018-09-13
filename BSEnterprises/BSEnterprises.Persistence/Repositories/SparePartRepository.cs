using System.Threading.Tasks;
using BSEnterprises.Domain.SpareParts;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.Persistence.Repositories
{
//     public class SparePartRepository
//     {
        
//     }
// }



  public class SparePartRepository : RepositoryBase<SparePart>, ISparePartRepository
    {
        private readonly ApplicationDbContext _context;
        public SparePartRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;

        }
        public override Task<SparePart> GetAllAsync(object id)
        {
            throw new System.NotImplementedException();
        }

        public override Task<SparePart> GetAsync(object id )
        {
            return _context.SpareParts.SingleOrDefaultAsync(c => c.Id == (int)id );
        }
    }
}