using FoodOrderServer.DataAccess.Repositories;
using FoodOrderServer.DataPresentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess
{
    public interface IUnitOfWork
    {
        IGenericRepository<Food> Food { get; }
        Task Save();
    }
}
