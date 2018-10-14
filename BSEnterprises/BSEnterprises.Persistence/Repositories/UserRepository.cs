using BSEnterprises.Domain.UserModule;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BSEnterprises.Persistence.Repositories
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context) : base((DbContext)context)
        {
            _context = context;
        }


        
       
      
        

        public override Task<User> GetAllAsync(object id)
        {
            throw new NotImplementedException();
        }

        public Task<User> GetAsync(object id)
        {
            return _context.Users.FindAsync(id);
        }

        public override Task<User> GetAsync(object id, string userId)
        {
            throw new NotImplementedException();
        }
    }
    }

