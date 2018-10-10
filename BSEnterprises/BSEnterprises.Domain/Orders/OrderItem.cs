using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.Products;
using BSEnterprises.Domain.SpareParts;

namespace BSEnterprises.Domain.Orders
{
    public class OrderItem
    {
        public int Id { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }
        public SparePart SparePart { get; set; }
        public int SparePartId { get; set; }
        
        public Company Company {get; set;}

        public int CompanyId {get; set;}
        public double Quantity { get; set; }

        public double ReturnDefective { get; set; }
        public double LeftInBag { get; set; }
        public Order Orders { get; set; }
        public OrderItem()
        {

        }
        public OrderItem(int productId,int sparePartId,double quantity, int companyId,
                         double returnDefective, 
                            double leftInBag)
        {
            ProductId = productId;
            CompanyId = companyId;
            SparePartId = sparePartId;
            Quantity = quantity;
            ReturnDefective = returnDefective;
        }
        public static OrderItem Add(int productId,int sparePartId, double quantity,
                                     int companyId,  double returnDefective, 
                                      double leftInBag )
        {
            return new OrderItem(productId,sparePartId, quantity, companyId,
                                 returnDefective,  leftInBag );
        }

    }
}