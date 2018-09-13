using BSEnterprises.Domain.Products;

namespace BSEnterprises.WebApp.Api.SparePartApi
{
    public class SaveSparePartResource
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public double? Price { get; set; }

        public Product Product { get; set; }
        public int ProductId { get; set; }


    }
}