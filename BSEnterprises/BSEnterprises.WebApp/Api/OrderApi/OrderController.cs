using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.Orders;
using BSEnterprises.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.WebApp.Api.OrderApi
{
    [Produces("application/json")]
    [Route("api/Order")]
    public class OrderController : Controller
    {
        private readonly IReadModelDatabase _database;
        private readonly IMapper _mapper;
        private readonly IOrderRepository _orderRepository;
        private readonly IEngineerRepository _engineerRepository;
        private readonly IUnitOfWork _unitOfWork;

        public OrderController(IReadModelDatabase database, IMapper mapper,
                               IOrderRepository orderRepository, IEngineerRepository engineerRepository, IUnitOfWork unitOfWork)
        {
            _database = database;
            _mapper = mapper;
            _orderRepository = orderRepository;
            _engineerRepository = engineerRepository;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IEnumerable<OrderResource>> GetOrders(DateTime fromDate, DateTime toDate)
        {
            var orders = await _database.Orders.Include(o =>o.Engineer).Where(o=>o.OrderDate.Date >= fromDate.Date && o.OrderDate.Date <= toDate.Date)
            .ToListAsync();
            return _mapper.Map<List<Order>, List<OrderResource>>(orders).ToList();
        }

        [HttpGet("{id}")]
        public async Task<SaveOrderResource> GetOrderById(int id)
        {
            var order = await FindOrderById(id);
            return _mapper.Map<Order, SaveOrderResource>(order);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] SaveOrderResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var engineer = await _engineerRepository.GetAsync(model.EngineerId);
            if (engineer == null)
                throw new ArgumentNullException();

            var newOrder = new Order(model.OrderDate, model.EngineerId, OrderItems(model));

            _orderRepository.Add(newOrder);
            await _unitOfWork.CompleteAsync();

            return StatusCode(201);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder(int id, [FromBody]SaveOrderResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var orderFromDb = await FindOrderById(id);
            if (orderFromDb == null)
            {
                return NotFound();
            }

            orderFromDb.Modify(model.OrderDate, model.EngineerId, OrderItems(model));
            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<Order, OrderResource>(orderFromDb));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var orderFromDb = await FindOrderById(id);
            if (orderFromDb == null)
            {
                return NotFound();
            }

            _orderRepository.Remove(orderFromDb);
            await _unitOfWork.CompleteAsync();
            return StatusCode(202);

        }
    

    private static List<OrderItem> OrderItems(SaveOrderResource model)
        {
            return model.OrderItems.Select(item => OrderItem.Add(item.ProductId,
                    item.SparePartId,item.Quantity, item.CompanyId, 
                    item.ReturnDefective, item.ReturnGood, item.LeftInBag))
                .ToList();
        }

        private Task<Order> FindOrderById(int id)
        {
            return _orderRepository.GetAsync(id);
        }
    }
}