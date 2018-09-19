using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BSEnterprises.WebApp.Api.OrderApi
{
    public class OrderResource
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public int EngineerId { get; set; }
    }
}
