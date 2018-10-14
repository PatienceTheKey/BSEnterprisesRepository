using BSEnterprises.Domain.Orders;
using BSEnterprises.Domain.Products;
using BSEnterprises.Domain.UserModule;
using System;
using System.Collections.Generic;

namespace BSEnterprises.Domain.SpareParts
{
    public class SparePart
    {
        public int Id { get; set; }
        public string Name { get; set; }    

        public double? Price { get; set; }
        public double? RateOfTax { get; set; }
        public string HsnSac { get; set; }

        public Product Product { get; set; }
        public int ProductId { get; set; }
        
        public double StockInHand { get; set; } 
        public DateTime OpeningDate { get; set; }

        public User User { get; set; }
        public string UserId { get; set; }

        public bool IsActive { get; set; }
        public IEnumerable<OrderItem> OrderItems { get; set; }

        public SparePart()
        {
            
        }

        public SparePart(string name, double? price, double? rateOfTax, string hsnSac, int productId,double stockInHand,DateTime openingDate,string userId)
        {
            Name = name;
            Price = price;
            ProductId = productId;
            RateOfTax = rateOfTax;
            HsnSac = hsnSac;
            StockInHand = stockInHand;
            OpeningDate = openingDate;
            UserId = userId;
            IsActive = true;
        
        }

        public void Modify(string name, double? price, double? rateOfTax, string hsnSac, int productId,double stockInHand,DateTime openingDate)
        {
            Name = name;
            Price = price;
            ProductId = productId;
              RateOfTax = rateOfTax;
            HsnSac = hsnSac;
            StockInHand = stockInHand;
            OpeningDate = openingDate;
            IsActive = true;
        }

        public void Delete()
        {
            IsActive = false;
        }

    }
}