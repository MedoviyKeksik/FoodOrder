using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services.JwtBuilder
{
    public interface IJwtBuilder
    {
        string GetAccessToken(DataPresentation.Models.User user);
        int? ValidateToken(string token);

        ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
        string GetRefreshToken();
    }
}
