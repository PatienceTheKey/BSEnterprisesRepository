using BSEnterprises.WebApp.Mappings;

namespace BSEnterprises.WebApp.Api.ProductApi
{
    public class ProductResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CompanyId { get; set; }
        public KeyValuePairResource Company { get; set; }

        public double Price { get; set; }



    }
}