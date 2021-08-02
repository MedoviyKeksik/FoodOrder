using FoodOrderServer.DataPresentation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess
{
    interface IUnitOfWork
    {
        Task Save();
    }
}
