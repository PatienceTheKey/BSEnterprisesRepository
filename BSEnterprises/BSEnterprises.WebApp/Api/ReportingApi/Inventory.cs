using System;
using System.Linq;

namespace BSEnterprises.WebApp.Api.ReportingApi
{
    public class Inventory
    {
        public double Alloted { get; set; }
        public double StockInHand { get; set; }
        public double LeftInBag { get; set; }
        public double LeftInStock { get; set; }
        public DateTime OpeningDate { get; set; }
    }

}