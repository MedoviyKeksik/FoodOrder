using FoodOrderServer.DataAccess;
using FoodOrderServer.DataPresentation.Models;
using FoodOrderServer.Services.JwtBuilder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services
{
    public class UserService : BaseService
    {
        private readonly int _iterationsCount = 10000;
        private readonly int _saltSize = 16;
        private readonly int _hashedPassSize = 49;

        private readonly IJwtBuilder _jwtBuilder;
        public UserService(IUnitOfWork unitOfWork, IJwtBuilder jwtBuilder)
            : base(unitOfWork)
        {
            _jwtBuilder = jwtBuilder;
        }

        public async Task<DataAccess.Entities.User> Register(RegistrationInfo registrationInfo)
        {
            if (string.IsNullOrWhiteSpace(registrationInfo.Email) || string.IsNullOrWhiteSpace(registrationInfo.Password))
            {
                return null;
            }
            var searchUser = _db.Users.GetAll().FirstOrDefault(u => u.Email == registrationInfo.Email || u.Phone == registrationInfo.Phone);
            if (searchUser == null)
            {
                var user = new DataAccess.Entities.User
                {
                    Name = registrationInfo.Name,
                    Surname = registrationInfo.Surname,
                    Phone = registrationInfo.Phone,
                    Email = registrationInfo.Email,
                    Password = HashPassword(registrationInfo.Password)
                };
                _db.Users.Add(user).Wait();
                _db.Save().Wait();
                return user;
            }
            return null;
        }

        public async Task<User> Authenticate(LoginInfo loginInfo)
        {
            if (string.IsNullOrWhiteSpace(loginInfo.Login) || string.IsNullOrWhiteSpace(loginInfo.Password))
            {
                return null;
            }
            var user = _db.Users.GetAll().FirstOrDefault(user => user.Phone == loginInfo.Login || user.Email == loginInfo.Login);
            if (user == null) return null;
            if (!IsValidPassword(user.Password, loginInfo.Password))
            {
                return null;
            }

            var userModel = new User
            {
                Id = user.Id,
                Email = user.Email,
                Phone = user.Phone,
                Roles = user.Roles.Select(role => new Role { Id = role.Id, Title = role.Title, Permissions = role.Permissions }).ToList()
            };
            var accessToken = _jwtBuilder.GetAccessToken(userModel);
            var refreshToken = _jwtBuilder.GetRefreshToken();

            user.RefreshToken = refreshToken;
            user.ExpireDate = DateTime.Now.AddDays(7); // ????????
            await _db.Save();

            userModel.AccessToken = accessToken;
            userModel.RefreshToken = refreshToken;
            return userModel;
        }

        private string HashPassword(string password)
        {
            byte[] salt;
            byte[] buffer;
            using (var bytes = new Rfc2898DeriveBytes(password, _saltSize, _iterationsCount))
            {
                salt = bytes.Salt;
                buffer = bytes.GetBytes(32);
            }
            byte[] dst = new byte[_hashedPassSize];
            Buffer.BlockCopy(salt, 0, dst, 1, 16);
            Buffer.BlockCopy(buffer, 0, dst, 17, 32);
            return Convert.ToBase64String(dst);
        }

        private bool IsValidPassword(string hashedPassword, string password)
        {
            if (string.IsNullOrWhiteSpace(hashedPassword) || string.IsNullOrWhiteSpace(password)) {
                return false;
            }
            var src = Convert.FromBase64String(hashedPassword);
            var salt = new byte[_saltSize];
            Buffer.BlockCopy(src, 1, salt, 0, _saltSize);
            var hashedPasswordBuffer = new byte[32];
            Buffer.BlockCopy(src, 17, hashedPasswordBuffer, 0, 32);
            byte[] currentPasswordBuffer;
            using (Rfc2898DeriveBytes bytes = new Rfc2898DeriveBytes(password, salt, _iterationsCount))
            {
                currentPasswordBuffer = bytes.GetBytes(32);
            }
            return Enumerable.SequenceEqual(hashedPasswordBuffer, currentPasswordBuffer);
        }

    }
}
