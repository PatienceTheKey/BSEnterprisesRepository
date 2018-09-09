using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BSEnterprises.Domain.Companies;
using BSEnterprises.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.WebApp.Api.CompanyApi
{

    [Produces("application/json")]
    [Route("api/Companies")]
    public class CompanyController : Controller
    {
        private readonly IReadModelDatabase _database;

        public CompanyController(IReadModelDatabase database)
        {
            _database = database;
        }

        [HttpGet]
        public async Task<IEnumerable<Company>> GetCompanies()
        {
                var companies = await _database.Companies.ToListAsync();
                return companies.ToList();
        }
    }
}