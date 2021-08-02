using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess
{
    interface IGenericRepository<T> : IDisposable where T : class
    {
        Task Add(T item);

        Task Get(int id);
        IQueryable<T> GetAll();
        void Update(T item);
        void Delete(int id);
    }
}
