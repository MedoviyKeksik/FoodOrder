using FoodOrderServer.DataAccess.Repositories;
using FoodOrderServer.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess
{
    public interface IUnitOfWork
    {
        public IGenericRepository<Food> Food { get; }
        public IGenericRepository<Order> Orders { get; }
        public IGenericRepository<Locale> Locales { get; }
        public IGenericRepository<Role> Roles { get; }
        public IGenericRepository<FoodLocalization> FoodLocalizations { get; }
        public IGenericRepository<FoodInOrder> FoodInOrders { get; }
        public IGenericRepository<User> Users { get; }
        public IGenericRepository<UsersInRoles> UsersInRoles { get; }

        Task Save();
    }
}
