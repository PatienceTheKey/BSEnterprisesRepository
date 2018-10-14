using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BSEnterprises.WebApp.Api.UserApi
{
    public class UserResource
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Gstin { get; set; }
        public string Pan { get; set; }
        public string ContactNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string TermsAndCondition { get; set; }
        public string BankName { get; set; }
        public string IfscCode { get; set; }
        public string AccountNumber { get; set; }
        public string State { get; set; }
        public string Subject { get; set; }
    }
}
