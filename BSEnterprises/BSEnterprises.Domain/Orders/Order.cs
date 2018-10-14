using System;
using System.Collections.Generic;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.UserModule;

namespace BSEnterprises.Domain.Orders
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public Engineer Engineer { get; set; }
        public int EngineerId { get; set; }
        public User User { get; set; }
        public string UserId { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
        public Order()
        {
            OrderItems = new List<OrderItem>();
        }
        public Order(DateTime orderDate,int engineerId,string userId,List<OrderItem> orderItems)
        {
            OrderDate = orderDate;
            EngineerId = engineerId;
            UserId = userId;
            OrderItems = orderItems;
        }
        public void Modify(DateTime orderDate, int engineerId, List<OrderItem> orderItems)
        {
            OrderDate = orderDate;
            EngineerId = engineerId;
            OrderItems = orderItems;
        }
       
    }
}