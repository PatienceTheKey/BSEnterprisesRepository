namespace BSEnterprises.WebApp.Api.OrderApi
{
    public class OrderItemResource
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int SparePartId { get; set; }
        public int CompanyId { get; set; }
        public double ReturnDefective { get; set; }
        public double LeftInBag { get; set; }
        public double Quantity { get; set; }

    }
}