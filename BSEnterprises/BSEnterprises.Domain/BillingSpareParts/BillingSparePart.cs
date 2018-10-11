using System;
using System.Collections.Generic;

namespace BSEnterprises.Domain.BillingSpareParts
{
    public class BillingSparePart
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }
        public string CustomerName { get; set; }
        public string  CustomerAddress { get; set; }
        public string  CustomerState { get; set; }
        public string  CustomerGstin { get; set; }
        public string  CustomerContact { get; set; }
        public string  PlaceOfSupply { get; set; }

        public double TotalInvoiceValue { get; set; }
        public ICollection<BillingSparePartItem> BillingSparePartItems { get; set; }

        public BillingSparePart()
        {
         }

         
    public BillingSparePart(string customerName, DateTime date, string customerAddress,
                            string customerState, string customerGstin, 
                            string placeOfSupply, double totalInvoiceValue, 
                            List <BillingSparePartItem> billingSparePartItems )
                           
                           
                            {
                                
                                CustomerName = customerName;
                                Date = date;
                                CustomerAddress = customerAddress;
                                CustomerState = customerState;
                                CustomerGstin = customerGstin;
                                PlaceOfSupply = placeOfSupply;
                                TotalInvoiceValue = totalInvoiceValue;

                                
                            }


           public void Modify(string customerName, DateTime date, string customerAddress,
                            string customerState, string customerGstin, 
                            string placeOfSupply, double totalInvoiceValue, 
                            List <BillingSparePartItem> billingSparePartItems )
                           
                           
                            {
                                
                                CustomerName = customerName;
                                Date = date;
                                CustomerAddress = customerAddress;
                                CustomerState = customerState;
                                CustomerGstin = customerGstin;
                                PlaceOfSupply = placeOfSupply;
                                TotalInvoiceValue = totalInvoiceValue;
                                
                                
                            }                     
            }


}
