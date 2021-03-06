using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BSEnterprises.Domain.Companies;
using BSEnterprises.Domain.UserModule;
using BSEnterprises.Persistence;
using BSEnterprises.WebApp.Api.UserApi;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.WebApp.Api.CompanyApi
{

    [Produces("application/json")]
    [Route("api/Companies")]
    public class CompanyController : UserController
    {
        private readonly IReadModelDatabase _database;
        private readonly IMapper _mapper;
        private readonly ICompanyRepository _companyRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CompanyController(IReadModelDatabase database, IMapper mapper, ICompanyRepository companyRepository,
                                IUnitOfWork unitOfWork,IUserRepository userRepository) : base(database,mapper,unitOfWork,userRepository)
        {
            _unitOfWork = unitOfWork;
            _companyRepository = companyRepository;
            _mapper = mapper;
            _database = database;
        }

        [HttpGet]
        public async Task<IEnumerable<CompanyResource>> GetCompanies()
        {
            var companies = await _database.Companies
                                        .Where(c => c.UserId == UserId)
                                        .ToListAsync();
            return _mapper.Map<List<Company>, List<CompanyResource>>(companies.Where(td => td.IsActive).ToList());
        }

        [HttpGet("{id}")]
        public async Task<SaveCompanyResource> GetById(int id)
        {
            var company = await _companyRepository.GetAsync(id,UserId);

            return _mapper.Map<Company, SaveCompanyResource>(company);
        }

        [HttpPost]
        public async Task<IActionResult> NewCompany([FromBody] SaveCompanyResource model)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var company = new Company(model.Name, model.ContactNumber,UserId);

            _companyRepository.Add(company);

            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<Company, CompanyResource>(company));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCompany(int id, [FromBody] SaveCompanyResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var companyFromDb = await _companyRepository.GetAsync(id,UserId);

            if (companyFromDb == null)
            {
                return NotFound();
            }

            companyFromDb.Modify(model.Name, model.ContactNumber);

            await _unitOfWork.CompleteAsync();

            return Ok(_mapper.Map<Company, CompanyResource>(companyFromDb));

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var companyFromDb = await _companyRepository.GetAsync(id,UserId);
            if (companyFromDb == null)
            {
                return NotFound();
            }
            companyFromDb.Delete();
            await _unitOfWork.CompleteAsync();
            return Ok();
        }
    }
}