using System.Collections.Generic;
using BSEnterprises.Domain.Companies;

namespace BSEnterprises.Domain.Products
{
    public class Product
    {
        public int Id { get; set; }     
        public string Name { get; set; }      
        public Company Company { get; set; }      
       
        public string CompanyId  { get; set; } 

        public bool IsActive { get; set; }

        public double? Price {get; set;}     


        public Product ()
        {
                
        }

          public Product( string name, string companyId, double? price)
        {
            
            Name = name;
            CompanyId = companyId;
            Price = price;
            IsActive = true;

                    }

         public void Modify( string name, string companyId, double? price )
         {
             
             Name = name;
             CompanyId = companyId;
             Price = price;
             IsActive = true;
          
         }

            public void Delete()
        {
            IsActive = false;
        }

    }

    
      
}