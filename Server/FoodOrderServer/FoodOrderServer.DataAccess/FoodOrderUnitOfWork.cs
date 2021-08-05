using FoodOrderServer.DataAccess;
using FoodOrderServer.DataAccess.Repositories;
using FoodOrderServer.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess
{
    public class FoodOrderUnitOfWork : IUnitOfWork
    {
        private readonly FoodOrderContext _db;
        private readonly IServiceProvider _serviceProvider;

        public FoodOrderUnitOfWork(FoodOrderContext db, IServiceProvider serviceProvider)
        {
            _db = db;
            _serviceProvider = serviceProvider;
        }

        public IGenericRepository<Food> Food => GetGenericRepository<Food>();
        public IGenericRepository<Order> Orders => GetGenericRepository<Order>();
        public IGenericRepository<Locale> Locales => GetGenericRepository<Locale>();
        public IGenericRepository<Role> Roles => GetGenericRepository<Role>();
        public IGenericRepository<FoodInOrder> FoodInOrders => GetGenericRepository<FoodInOrder>();
        public IGenericRepository<FoodLocalization> FoodLocalizations => GetGenericRepository<FoodLocalization>();
        public IGenericRepository<User> Users => GetGenericRepository<User>();


        public IGenericRepository<TModel> GetGenericRepository<TModel>() where TModel : class
        {
            return (IGenericRepository<TModel>)_serviceProvider.GetService(typeof(IGenericRepository<TModel>));
        }

        public async Task Save()
        {
            await _db.SaveChangesAsync();
        }
    }
}
