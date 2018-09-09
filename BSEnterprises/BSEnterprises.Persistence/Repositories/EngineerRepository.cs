using System.Threading.Tasks;
using BSEnterprises.Domain.Engineers;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.Persistence.Repositories
{
    public class EngineerRepository : RepositoryBase<Engineer>, IEngineerRepository
    {
        private readonly ApplicationDbContext _context;
        public EngineerRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;

        }
        public override Task<Engineer> GetAllAsync(object id)
        {
            throw new System.NotImplementedException();
        }

        public override Task<Engineer> GetAsync(object id )
        {
            return _context.Engineers.SingleOrDefaultAsync(c => c.Id == (int)id );
        }
    }
}