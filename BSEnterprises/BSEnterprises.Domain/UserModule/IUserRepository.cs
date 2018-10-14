using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BSEnterprises.Domain.UserModule
{
    public interface IUserRepository : IRepositoryBase<User>
    {
        
        
       Task<User> GetAsync(object id);
        
        
    }
}
