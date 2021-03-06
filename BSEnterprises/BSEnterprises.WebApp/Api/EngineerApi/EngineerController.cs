using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BSEnterprises.Domain.Engineers;
using BSEnterprises.Domain.UserModule;
using BSEnterprises.Persistence;
using BSEnterprises.WebApp.Api.UserApi;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.WebApp.Api.EngineerApi
{
    [Produces("application/json")]
    [Route("api/Engineers")]
    public class EngineerController : UserController
    {
        private readonly IReadModelDatabase _database;
        private readonly IMapper _mapper;
        private readonly IEngineerRepository _engineerRepository;
        private readonly IUnitOfWork _unitOfWork;
        public EngineerController(IReadModelDatabase database, IMapper mapper,
                                    IEngineerRepository engineerRepository, IUnitOfWork unitOfWork,IUserRepository userRepository) 
                                    : base(database,mapper,unitOfWork,userRepository)
        {
            _unitOfWork = unitOfWork;
            _engineerRepository = engineerRepository;
            _mapper = mapper;
            _database = database;

        }
         [HttpGet]
        public async Task<IEnumerable<EngineerResource>> GetCompanies()
        {
            var engineers = await _database.Engineers.ToListAsync();
            return _mapper.Map<List<Engineer>, List<EngineerResource>>(engineers.Where(td => td.IsActive).ToList());        }

        [HttpGet("{id}")]
        public async Task<SaveEngineerResource> GetById(int id)
        {
            var engineer = await _engineerRepository.GetAsync(id,UserId);

            return _mapper.Map<Engineer, SaveEngineerResource>(engineer);
        }

        [HttpPost]
        public async Task<IActionResult> NewEngineer([FromBody] SaveEngineerResource model)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var engineer = new Engineer(model.Name, model.ContactNumber, model.Address,UserId);

            _engineerRepository.Add(engineer);

            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<Engineer, EngineerResource>(engineer));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEngineer(int id, [FromBody] SaveEngineerResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var engineerFromDb = await _engineerRepository.GetAsync(id,UserId);

            if (engineerFromDb == null)
            {
                return NotFound();
            }

            engineerFromDb.Modify(model.Name, model.ContactNumber, model.Address);

            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<Engineer, EngineerResource>(engineerFromDb));

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var engineerFromDb = await _engineerRepository.GetAsync(id,UserId);
            if (engineerFromDb == null)
            {
                return NotFound();
            }
            engineerFromDb.Delete();
            await _unitOfWork.CompleteAsync();
            return Ok();
        }
    }

}
