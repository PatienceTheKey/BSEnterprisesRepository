using BSEnterprises.Domain.Orders;
using BSEnterprises.Domain.Products;
using System.Collections.Generic;

namespace BSEnterprises.Domain.SpareParts
{
    public class SparePart
    {
        public int Id { get; set; }
        public string Name { get; set; }    

        public double? Price { get; set; }

        public Product Product { get; set; }
        public int ProductId { get; set; }
        public bool IsActive { get; set; }
        public IEnumerable<OrderItem> OrderItems { get; set; }

        public SparePart()
        {
            
        }

        public SparePart(string name, double? price, int productId)
        {
            Name = name;
            Price = price;
            ProductId = productId;
            IsActive = true;
        
        }

        public void Modify(string name, double? price, int productId)
        {
            Name = name;
            Price = price;
            ProductId = productId;
            IsActive = true;
        }

        public void Delete()
        {
            IsActive = false;
        }

    }
}