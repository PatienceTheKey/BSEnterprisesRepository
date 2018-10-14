using BSEnterprises.Domain.Orders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BSEnterprises.Persistence.Repositories
{
    public class OrderRepository : RepositoryBase<Order>, IOrderRepository
    {
        private readonly ApplicationDbContext _context;

        public OrderRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }
        public override Task<Order> GetAllAsync(object id)
        {
            throw new NotImplementedException();
        }

        public override Task<Order> GetAsync(object id,string userId)
        {
            return _context.Orders.Include(or => or.OrderItems).SingleOrDefaultAsync(or => or.Id == (int)id && or.UserId == userId);
        }
    }
}
