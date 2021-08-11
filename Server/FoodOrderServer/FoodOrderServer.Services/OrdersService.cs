using FoodOrderServer.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services
{
    public class OrdersService : BaseService
    {
        public OrdersService(IUnitOfWork unitOfWork) 
            : base(unitOfWork)
        {
        }
    }
}
