using AutoMapper;
using BSEnterprises.Domain.UserModule;
using BSEnterprises.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BSEnterprises.WebApp.Api.UserApi
{
    [Produces("application/json")]
    [Route("api/User")]
    
    public class UserController : Controller
    {
        private readonly IReadModelDatabase _database;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserRepository _userRepository;

        protected string UserId => GetCurrentUserId();



        public UserController(IReadModelDatabase database, IMapper mapper, IUnitOfWork unitOfWork, IUserRepository userRepository)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _userRepository = userRepository;
            _database = database;
        }

        private string GetCurrentUserId()
        {
            //var accountingUnitId = _database.AccountingUnits.SingleAsync(t => t.Subject == User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value).Result;

            //return accountingUnitId.Id;

            return "1";
        }


        //protected async Task<string> GetAccountingUnitPlaceOfSupply()
        //{
        //    var accountingUnit = await _database.AccountingUnits.SingleOrDefaultAsync(
        //        u => u.Subject == User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

        //    return accountingUnit.PlaceOfSupply;
        //}

        [HttpGet("Users")]
        public async Task<IEnumerable<UserResource>> GetUsers()
        {
            var users = await _database.Users
                                    .ToListAsync();

            return _mapper.Map<List<User>, List<UserResource>>(users.ToList());
        }
        

        


        [HttpGet("Profile")]
        public async Task<UserResource> GetAccountingUnitProfielById()
        {
            //Todo uncomment
            var user = await _database.Users
                                               .FirstOrDefaultAsync(us => us.Id == UserId);                        
                          //  .SingleOrDefaultAsync
                          //(u => u.Subject == User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

            return _mapper.Map<User, UserResource>(user);
        }

        [HttpPut("Profile")]
        public async Task<IActionResult> UpdateUser([FromBody] UserResource model)
        {
             var userFromDb = await _database.Users.FirstOrDefaultAsync(us => us.Id == UserId);
            //var accountingUnitFromDb = await _database.AccountingUnits.SingleOrDefaultAsync(t => t.Subject == User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);
            if (userFromDb == null)
            {
                return NotFound();
            }

            userFromDb.Modify(model.Name, model.Gstin,model.Pan, model.ContactNumber, model.Email, model.Address,
                                model.TermsAndCondition, model.BankName, model.IfscCode, model.AccountNumber, 
                                model.State);

            await _unitOfWork.CompleteAsync();
            return Ok(model);
        }
        
    }
}
