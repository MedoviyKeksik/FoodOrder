using FoodOrderServer.DataAccess;
using FoodOrderServer.DataPresentation.Models;
using FoodOrderServer.Services.JwtBuilder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services
{
    public class UserService : BaseService
    {
        private readonly IJwtBuilder _jwtBuilder;
        public UserService(IUnitOfWork unitOfWork, IJwtBuilder jwtBuilder)
            : base(unitOfWork)
        {
            _jwtBuilder = jwtBuilder;
        }

        public async Task<DataAccess.Entities.User> Register(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<User> Authenticate(string login, string password)
        {
            if (string.IsNullOrWhiteSpace(login) || string.IsNullOrWhiteSpace(password))
            {
                return null;
            }
            var user = _db.Users.GetAll().FirstOrDefault(user => user.Phone == login || user.Email == login);
            if (user == null) return null;
            throw new NotImplementedException();
        }
    }
}
