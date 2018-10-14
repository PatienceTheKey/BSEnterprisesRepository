using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BSEnterprises.Domain.BillingSpareParts;
using BSEnterprises.Domain.UserModule;
using BSEnterprises.Persistence;
using BSEnterprises.WebApp.Api.UserApi;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.WebApp.Api.BillingSparePartApi
{
    [Produces("application/json")]
    [Route("BillingSparePart")]
    public class BillingSparePartController : UserController
    {
        private readonly IReadModelDatabase _database;
        private readonly IMapper _mapper;
        private readonly IBillingSparePartRepository _billingSparePartRepository;
        private readonly IUnitOfWork _unitOfWork;

        public BillingSparePartController( IReadModelDatabase database, IMapper mapper, 
                                IBillingSparePartRepository billingSparePartRepository,
                                IUnitOfWork unitOfWork,IUserRepository userRepository) : base(database,mapper,unitOfWork,userRepository)
        {
            _database = database;
            _mapper = mapper;
            _billingSparePartRepository = billingSparePartRepository;
            _unitOfWork = unitOfWork;
        }



   [HttpGet]
        public async Task<IEnumerable<BillingSparePartResource>> GetAll(DateTime fromDate, DateTime toDate)
        {
            var billingSpareParts = await _database.BillingSpareParts.Where(o=>o.Date.Date >= fromDate.Date && o.Date.Date <= toDate.Date)
            .ToListAsync();
            return _mapper.Map<List<BillingSparePart>, List<BillingSparePartResource>>(billingSpareParts).ToList();
        }

        [HttpGet("{id}")]
        public async Task<SaveBillingSparePartResource> GetOrderById(int id)
        {
            var billingSparePart = await FindOrderById(id);
            return _mapper.Map<BillingSparePart, SaveBillingSparePartResource>(billingSparePart);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] SaveBillingSparePartResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

          
            var newBillingSparePart = new BillingSparePart( model.CustomerName, model.Date,
                                        model.CustomerState, model.CustomerGstin, model.CustomerContact,
                                        model.PlaceOfSupply, model.TotalInvoiceValue,UserId,BillingSparePartItems(model));

            _billingSparePartRepository.Add(newBillingSparePart);
            await _unitOfWork.CompleteAsync();

            return StatusCode(201);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder(int id, [FromBody]SaveBillingSparePartResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var orderFromDb = await FindOrderById(id);
            if (orderFromDb == null)
            {
                return NotFound();
            }

            orderFromDb.Modify( model.CustomerName, model.Date,
                                        model.CustomerState, model.CustomerGstin, model.CustomerContact,
                                        model.PlaceOfSupply, model.TotalInvoiceValue, BillingSparePartItems(model));
            await _unitOfWork.CompleteAsync();

            


            return Ok(_mapper.Map<BillingSparePart, BillingSparePartResource>(orderFromDb));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var billingSparePartFromDb = await FindOrderById(id);
            if (billingSparePartFromDb == null)
            {
                return NotFound();
            }

            _billingSparePartRepository.Remove(billingSparePartFromDb);
            await _unitOfWork.CompleteAsync();
            return StatusCode(202);

        }
    

    private static List<BillingSparePartItem> BillingSparePartItems(SaveBillingSparePartResource model)
        {
            return model.BillingSparePartItems.Select(item => BillingSparePartItem.Add(item.ProductId,
                    item.Quantity,item.Discount, item.Rate, item.TaxableValue,
                    item.HsnCode,  item.IgstAmount, item.CgstAmount, item.SgstAmount,item.Total))
                .ToList();
        }





        private Task<BillingSparePart> FindOrderById(int id)
        {
            return _billingSparePartRepository.GetAsync(id,UserId);
        }
    }
}













