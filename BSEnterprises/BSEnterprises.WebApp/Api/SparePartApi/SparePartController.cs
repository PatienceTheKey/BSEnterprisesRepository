using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BSEnterprises.Domain.SpareParts;
using BSEnterprises.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.WebApp.Api.SparePartApi
{
    [Produces("application/json")]
    [Route("api/SpareParts")]
      public class SparePartController: Controller
    {
        
      private readonly IReadModelDatabase _database;
        private readonly IMapper _mapper;
        private readonly ISparePartRepository _sparePartRepository;
        private readonly IUnitOfWork _unitOfWork;
        public SparePartController(IReadModelDatabase database, IMapper mapper,
                                    ISparePartRepository sparePartRepository, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _sparePartRepository = sparePartRepository;
            _mapper = mapper;
            _database = database;
            

        }
         
         
         [HttpGet]
        public async Task<IEnumerable<SparePartResource>> GetSpareParts()
        {
            var spareParts = await _database.SpareParts.Include(a=> a.Product)
            .ToListAsync();
            return _mapper.Map<List<SparePart>, List<SparePartResource>>(spareParts.Where(td => td.IsActive).ToList());
        }

        [HttpGet("{id}")]
        public async Task<SaveSparePartResource> GetById(int id)
        {
            var sparePart = await _sparePartRepository.GetAsync(id);

            return _mapper.Map<SparePart, SaveSparePartResource>(sparePart);
        }

        [HttpGet("Product")]
        public async Task<IEnumerable<SparePartResource>> GetSparePartsByProduct(int productId)
        {
             var sparePartsByProduct = await _database.SpareParts.Where(sp => sp.ProductId == productId)
            .ToListAsync();

            return _mapper.Map<List<SparePart>, List<SparePartResource>>(sparePartsByProduct.Where(td => td.IsActive).ToList());
        } 

        [HttpPost]
        public async Task<IActionResult> NewProduct([FromBody] SaveSparePartResource model)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

                

            var sparePart = new SparePart(model.Name,  model?.Price, model?.RateOfTax,
            model.HsnSac, model.ProductId);


            _sparePartRepository.Add(sparePart);

            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<SparePart, SparePartResource>(sparePart));
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] SaveSparePartResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var sparePartFromDb = await _sparePartRepository.GetAsync(id);

            if (sparePartFromDb == null)
            {
                return NotFound();
            }

            sparePartFromDb.Modify(model.Name,  model?.Price, model?.RateOfTax,
            model.HsnSac, model.ProductId);
            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<SparePart, SparePartResource>(sparePartFromDb));

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var productFromDb = await _sparePartRepository.GetAsync(id);
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