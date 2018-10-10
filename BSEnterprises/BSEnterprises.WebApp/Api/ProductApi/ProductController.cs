using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BSEnterprises.Domain.Products;

using BSEnterprises.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;




namespace BSEnterprises.WebApp.Api.ProductApi
{
    [Produces("application/json")]
    [Route("api/Products")]
    public class ProductController: Controller
    {
        
      private readonly IReadModelDatabase _database;
        private readonly IMapper _mapper;
        private readonly IProductRepository _productRepository;
        private readonly IUnitOfWork _unitOfWork;
        public ProductController(IReadModelDatabase database, IMapper mapper,
                                    IProductRepository productRepository, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _productRepository = productRepository;
            _mapper = mapper;
            _database = database;
            

        }
         
         
         [HttpGet]
        public async Task<IEnumerable<ProductResource>> GetProducts()
        {
            var products = await _database.Products.Include(c => c.Company).Where(a=>a.IsActive == true).ToListAsync();
            return _mapper.Map<List<Product>, List<ProductResource>>(products).ToList();
        }

        [HttpGet("{id}")]
        public async Task<SaveProductResource> GetById(int id)
        {
            var product = await _productRepository.GetAsync(id);

            return _mapper.Map<Product, SaveProductResource>(product);
        }

        [HttpGet("Company")]
        public async Task<IEnumerable<ProductResource>> GetCompanies(int companyId)
        {
            var products = await _database.Products.Where(p => p.CompanyId == companyId).Where(a=>a.IsActive == true).ToListAsync();
            return _mapper.Map<List<Product>, List<ProductResource>>(products).ToList();
        }

        [HttpPost]
        public async Task<IActionResult> NewProduct([FromBody] SaveProductResource model)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

                

            var product = new Product(model.Name, model.CompanyId, model?.Price);


            _productRepository.Add(product);

            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<Product, ProductResource>(product));
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] SaveProductResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var productFromDb = await _productRepository.GetAsync(id);

            if (productFromDb == null)
            {
                return NotFound();
            }

            productFromDb.Modify(model.Name, model.CompanyId, model?.Price);

            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<Product, ProductResource>(productFromDb));

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var productFromDb = await _productRepository.GetAsync(id);
            if (productFromDb == null)
            {
                return NotFound();
            }
            productFromDb.Delete();
            await _unitOfWork.CompleteAsync();
            return Ok();
        }

        
    }
}