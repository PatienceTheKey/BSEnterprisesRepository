using System;
using BSEnterprises.Domain.Products;

namespace BSEnterprises.WebApp.Api.SparePartApi
{
    public class SaveSparePartResource
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public double? RateOfTax { get; set; }
        public string HsnSac { get; set; }


        public double? Price { get; set; }

        public Product Product { get; set; }
        public int ProductId { get; set; }
        public double StockInHand { get; set; }
        public DateTime OpeningDate { get; set; }
        public string Model { get; set; }
        public string Code { get; set; }

    }
}