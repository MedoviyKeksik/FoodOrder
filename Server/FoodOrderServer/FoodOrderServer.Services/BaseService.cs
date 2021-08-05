using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoodOrderServer.DataAccess;


namespace FoodOrderServer.Services
{
    public class BaseService
    {
        protected IUnitOfWork _db;
        public BaseService(IUnitOfWork unitOfWork)
        {
            _db = unitOfWork;
        }
    }
}
