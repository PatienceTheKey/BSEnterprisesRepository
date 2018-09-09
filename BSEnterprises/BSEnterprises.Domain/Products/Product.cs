using System.Collections.Generic;

namespace BSEnterprises.Domain.Products
{
    public class Product
    {
        public int Id { get; set; }     
        public string Name { get; set; }      

        public ICollection<ProductItem> ProductItems { get; set; }       

        public Product ()
        {
                ProductItems = new List<ProductItem>();
        }

          public Product( string name, List<ProductItem> productItems)
        {
            
            Name = name;
            ProductItems = productItems;
         }

         public void Modify( string name, List<ProductItem> productItems)
         {
             
             Name = name;
             ProductItems = productItems;

         }
    }
      
}