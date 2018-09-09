using System.Collections.Generic;

namespace BSEnterprises.WebApp.Api.ProductApi
{
    public class SaveProductResource
    {
         public int Id { get; set; }
        public int Name { get; set; }
        public List<SaveProductItemResource> ProductItems {get; set;}
      
    }

    public class SaveProductItemResource
    {
        public string Name { get; set; }
    }
}