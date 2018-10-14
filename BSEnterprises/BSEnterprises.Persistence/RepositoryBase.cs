using System.Collections.Generic;
using System.Threading.Tasks;
using BSEnterprises.Domain;
using Microsoft.EntityFrameworkCore;

namespace BSEnterprises.Persistence
{
     public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        private readonly DbSet<T> _dbSet;
        protected RepositoryBase(DbContext context)
        {
            _dbSet = context.Set<T>();

        }
        public void Add(T entity)
        {
            _dbSet.Add(entity);
        }

        public void AddRange(IEnumerable<T> entities)
        {
           _dbSet.AddRange(entities);        }

        public abstract Task<T> GetAllAsync(object id);

        public abstract Task<T> GetAsync(object id,string userId);

        public void Remove(T entity)
        {
           _dbSet.Remove(entity);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
           _dbSet.RemoveRange(entities);        
        }
    }
}