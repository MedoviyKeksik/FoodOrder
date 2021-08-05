using FoodOrderServer.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services
{
    public class UserService : BaseService
    {
        public UserService(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {

        }
    }
}
