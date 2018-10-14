using BSEnterprises.Domain.Orders;
using BSEnterprises.Domain.UserModule;
using System.Collections.Generic;

namespace BSEnterprises.Domain.Companies
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public User User { get; set; }
        public string UserId { get; set; }
        public bool IsActive { get; set; }
        public IEnumerable<OrderItem> OrderItems { get; set; }

        public Company()
        {
            
        }
        public Company(string name, string contactNumber,string userId)
        {
            Name = name;
            ContactNumber = contactNumber;
            UserId = userId;
            IsActive = true;
        }
        public void Modify(string name, string contactNumber)
        {
            Name = name;
            ContactNumber = ContactNumber;
            IsActive = true;
        }
        public void Delete()
        {
            IsActive = false;
        }
    }
}