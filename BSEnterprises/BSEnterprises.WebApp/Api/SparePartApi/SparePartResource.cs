using BSEnterprises.Domain.Products;
using BSEnterprises.WebApp.Mappings;

namespace BSEnterprises.WebApp.Api.SparePartApi
{
    public class SparePartResource
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public double? Price { get; set; }
        public double? RateOfTax { get; set; }
        public string HsnSac { get; set; }


        public KeyValuePairResource Product { get; set; }
        
        public int ProductId { get; set; }
        public double StockInHand { get; set; }


    }
}