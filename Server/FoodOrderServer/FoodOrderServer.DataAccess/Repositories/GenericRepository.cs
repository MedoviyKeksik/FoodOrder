using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly DbSet<T> _dbSet;

        public GenericRepository(FoodOrderContext dbContext) {
            _dbSet = dbContext.Set<T>();
        }

        public async Task Add(T item)
        {
            await _dbSet.AddAsync(item);
        }

        public void Delete(int id)
        {
            T item = _dbSet.Find(id);
            if (item != null) {
                _dbSet.Remove(item);
            }
        }

        public void Dispose()
        {
            // throw new NotImplementedException();
        }

        public async Task<T> Get(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public IQueryable<T> GetAll()
        {
            return _dbSet;
        }

        public void Update(T item)
        {
            _dbSet.Update(item);
        }
    }
}
