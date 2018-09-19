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
        public double Quantity { get; set; }
        public Order Orders { get; set; }
        public OrderItem()
        {

        }
        public OrderItem(int productId,int sparePartId,double quantity)
        {
            ProductId = productId;
            SparePartId = sparePartId;
            Quantity = quantity;
        }
        public static OrderItem Add(int productId,int sparePartId, double quantity)
        {
            return new OrderItem(productId,sparePartId, quantity);
        }

    }
}