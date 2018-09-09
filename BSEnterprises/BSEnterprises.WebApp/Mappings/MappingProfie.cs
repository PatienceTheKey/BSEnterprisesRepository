using AutoMapper;
using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.Products;
using BSEnterprises.WebApp.Api.CompanyApi;
using BSEnterprises.WebApp.Api.EngineerApi;
using BSEnterprises.WebApp.Api.ProductApi;

namespace BSEnterprises.WebApp.Mappings
{
   public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Company, SaveCompanyResource>();
            CreateMap<Company, CompanyResource>();
            CreateMap<Engineer, SaveEngineerResource>();
            CreateMap<Engineer, EngineerResource>();
            CreateMap<Product, SaveProductResource>();
            CreateMap<Product, ProductResource>();
                   }    
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       