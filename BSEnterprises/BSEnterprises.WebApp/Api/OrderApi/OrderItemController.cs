using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BSEnterprises.Domain.Orders;
using BSEnterprises.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.WebApp.Api.OrderApi
{
    [Produces("application/json")]
    [Route("api/OrderItems")]
    public class OrderItemController : Controller
    {
        private readonly IReadModelDatabase _readModelDatabase;
        private readonly IMapper _mapper;
        public OrderItemController(IReadModelDatabase readModelDatabase, IMapper mapper)
        {
            _mapper = mapper;
            _readModelDatabase = readModelDatabase;

        }

        [HttpGet]
        public async Task<IEnumerable<OrderItemResource>> GetOrderItems(int id)
        {
            var orderItems = await _readModelDatabase.OrderItems.Where(it => it.Orders.Id == id)
                                                       .ToListAsync();

            return _mapper.Map<List<OrderItem>, List<OrderItemResource>>(orderItems).ToList();
        }

        [HttpGet("{id}")]
        public async Task<SaveOrderItemResource> GetOrderItem(int id)
        {
            var orderItem = await _readModelDatabase.OrderItems.SingleOrDefaultAsync(it => it.Id == id);
            return _mapper.Map<OrderItem, SaveOrderItemResource>(orderItem);
        }
    }
}