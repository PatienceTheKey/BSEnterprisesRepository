using System;
using System.Linq;
using BSEnterprises.Domain.SpareParts;
using BSEnterprises.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.WebApp.Api.ReportingApi
{
    [Produces("application/json")]
    [Route("api/Reporting")]
    public class ReportingController : Controller
    {
        private readonly IReadModelDatabase _database;
        private readonly ISparePartRepository _sparePartRepository;

        public ReportingController(IReadModelDatabase database, ISparePartRepository sparePartRepository)
        {
            _sparePartRepository = sparePartRepository;
            _database = database;
        }

        [HttpGet]
        public IActionResult GetReporting(int engineerId, DateTime fromDate, DateTime toDate, int sparePartId)
        {
            var reports = _database.Orders.Where(o => o.EngineerId == engineerId)
                                            .Where(o => o.OrderDate.Date >= fromDate.Date && o.OrderDate.Date <= toDate.Date)
                                            .Select(o => o.OrderItems.Where(oI => oI.SparePartId == sparePartId).Select(oI => new Reporting
                                            {
                                                Date = oI.Orders.OrderDate,

                                                Alloted = oI.Quantity,
                                                ReturnDefective = oI.ReturnDefective,
                                                LeftInBag = oI.LeftInBag,
                                                LeftInStock = (oI.SparePart.StockInHand - oI.Quantity) + oI.LeftInBag
                                            }));

            // .Select(o => o.OrderItems.Select(oI => oI.Quantity));

            //  var returnDefective = _database.Orders.Where(o => o.EngineerId == engineerId)
            //                                 .Where(o=>o.OrderDate.Date >= fromDate.Date && o.OrderDate.Date <= toDate.Date)
            //                                 .Select(o => o.OrderItems.Where(oI => oI.SparePartId == sparePartId).Select(oI => oI.ReturnDefective));
            return Ok(reports

            );
        }

        [HttpGet("Inventory")]
        public IActionResult GetInventories(int sparePartId)
        {
            var alloted = GetSparePartId(sparePartId)
                                        .Sum(oI => oI.Quantity);

            var sparePart = _database.SpareParts.FirstOrDefault(sp => sp.Id == sparePartId);
            var stockInHand = sparePart.StockInHand;
            var openingDate = sparePart.OpeningDate;

            var leftInBag = GetSparePartId(sparePartId)
                                                .Sum(oI => oI.LeftInBag);
            var leftInStock = (stockInHand - alloted) + leftInBag;

            return Ok(new Inventory
            {
                Alloted = alloted,
                StockInHand = stockInHand,
                LeftInBag = leftInBag,
                LeftInStock = leftInStock,
                OpeningDate = openingDate
            });
        }

        private IQueryable<Domain.Orders.OrderItem> GetSparePartId(int sparePartId)
        {
            return _database.OrderItems.Where(oI => oI.SparePartId == sparePartId);
        }
    }

}