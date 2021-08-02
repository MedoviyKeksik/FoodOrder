using FoodOrderServer.DataPresentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Repositories
{
    class FoodOrderUnitOfWork : IUnitOfWork
    {
        private readonly FoodContext _food;
        private readonly IServiceProvider _serviceProvider;

        public FoodOrderUnitOfWork(FoodContext food, IServiceProvider serviceProvider)
        {
            _food = food;
            _serviceProvider = serviceProvider;
        }

        public IGenericRepository<Food> Food => GetGenericRepository<Food>();

        public IGenericRepository<TModel> GetGenericRepository<TModel>() where TModel : class
        {
            return (IGenericRepository<TModel>)_serviceProvider.GetService(typeof(IGenericRepository<TModel>));
        }

        public async Task Save()
        {
            await _food.SaveChangesAsync();
        }
    }
}
