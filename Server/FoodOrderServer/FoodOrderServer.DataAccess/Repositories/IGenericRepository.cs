using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Repositories
{
    public interface IGenericRepository<T> : IDisposable where T : class
    {
        Task Add(T item);

        Task<T> Get(int id);
        IQueryable<T> GetAll();
        void Update(T item);
        void Delete(int id);
    }
}
