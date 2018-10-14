using System.Collections.Generic;
using System.Threading.Tasks;

namespace BSEnterprises.Domain
{
     public interface IRepositoryBase<T> where T : class
    {
        Task<T> GetAsync(object id,string userId);
        Task<T> GetAllAsync(object id);
        
        void Add(T entity);
        
        void AddRange(IEnumerable<T> entities);

        void Remove(T entity);

        void RemoveRange(IEnumerable<T> entities);
   
    }
}