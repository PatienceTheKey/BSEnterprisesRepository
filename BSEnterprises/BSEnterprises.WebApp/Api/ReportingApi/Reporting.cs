using System;
using System.Linq;

namespace BSEnterprises.WebApp.Api.ReportingApi
{
    public class Reporting
    {
        public DateTime Date { get; set; }
        
        public double Alloted { get; set; }
        public double ReturnDefective { get; set; }
        public double LeftInBag { get; set; }
        public double LeftInStock { get; set; }
    }

}