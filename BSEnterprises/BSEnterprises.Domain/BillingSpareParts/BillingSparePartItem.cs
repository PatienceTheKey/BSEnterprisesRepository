namespace BSEnterprises.Domain.BillingSpareParts
{
    public class BillingSparePartItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public double Quantity { get; set; }
        public double Discount { get; set; }
        public double Rate { get; set; }

        public string HsnCode { get; set; }
        public double TaxableValue { get; set; }
        public double IgstAmount { get; set; }
        public double CgstAmount { get; set; }
        public double SgstAmount { get; set; }
        public double Total { get; set; }

        public BillingSparePartItem()
        {

        }

        private readonly int productId;

        public BillingSparePartItem(int productId, double quantity, double discount, double rate, double taxableValue,
                              string hsnCode, double igstAmount, double cgstAmount, double sgstAmount, double total)
        {
            ProductId = productId;
            Quantity = quantity;
            Discount = discount;
            Rate = rate;
            TaxableValue = taxableValue;
            HsnCode = hsnCode;
            IgstAmount = igstAmount;
            CgstAmount = cgstAmount;
            SgstAmount = sgstAmount;

        }


   public static BillingSparePartItem Add(int productId, double quantity, double discount, double rate, double taxableValue,
                              string hsnCode, double igstAmount, double cgstAmount, double sgstAmount, double total )
        {
            return new BillingSparePartItem( productId,  quantity,  discount,  rate, taxableValue,
                               hsnCode,  igstAmount,  cgstAmount,  sgstAmount,  total );
        }



    }
}