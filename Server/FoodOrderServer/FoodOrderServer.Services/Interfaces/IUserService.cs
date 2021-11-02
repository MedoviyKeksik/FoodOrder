using FoodOrderServer.DataPresentation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services.Interfaces
{
    public interface IUserService
    {
        Task<DataAccess.Entities.User> Register(RegistrationInfo registrationInfo);
        Task<User> Authenticate(LoginInfo loginInfo);
        Task<User> RefreshToken(string accesToken, string refreshToken);
    }
}
