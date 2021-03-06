using AutoMapper;
using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.Orders;
using BSEnterprises.Domain.Products;
using BSEnterprises.Domain.SpareParts;
using BSEnterprises.Domain.UserModule;
using BSEnterprises.WebApp.Api.CompanyApi;
using BSEnterprises.WebApp.Api.EngineerApi;
using BSEnterprises.WebApp.Api.OrderApi;
using BSEnterprises.WebApp.Api.ProductApi;
using BSEnterprises.WebApp.Api.SparePartApi;
using BSEnterprises.WebApp.Api.UserApi;

namespace BSEnterprises.WebApp.Mappings
{
   public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Company, SaveCompanyResource>();
            CreateMap<Company, CompanyResource>();
            CreateMap<Company, KeyValuePairResource>();
            CreateMap<Product, KeyValuePairResource>();
            CreateMap<Engineer, SaveEngineerResource>();
            CreateMap<Engineer, EngineerResource>();
            CreateMap<Engineer,KeyValuePairResource>();
            CreateMap<Product, SaveProductResource>();
            CreateMap<Product, ProductResource>();
            CreateMap<SparePart, SaveSparePartResource>();
            CreateMap<SparePart, SparePartResource>();
            CreateMap<Order, OrderResource>();
            CreateMap<Order, SaveOrderResource>();
            CreateMap<OrderItem, SaveOrderItemResource>();
            CreateMap<OrderItem, OrderItemResource>();
            CreateMap<User,UserResource>();
        }    
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       