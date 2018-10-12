using System;

namespace BSEnterprises.WebApp.Api.BillingSparePartApi
{
    public class BillingSparePartResource
  
  
    {    public int Id { get; set; }
        public string CustomerName { get; set; }
        public string  CustomerAddress { get; set; }
        public DateTime Date { get; set; }
        public string  CustomerState { get; set; }
        public string  CustomerGstin { get; set; }
        public string  CustomerContact { get; set; }
        public string  PlaceOfSupply { get; set; }

        public double TotalInvoiceValue { get; set; }
    

        
    }
}