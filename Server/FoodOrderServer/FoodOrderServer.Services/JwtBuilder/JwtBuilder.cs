using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services.JwtBuilder
{
    public class JwtBuilder : IJwtBuilder
    {
        private readonly JwtOptions _options;
        public JwtBuilder(IOptions<JwtOptions> options)
        {
            _options = options.Value;
        }

        public string GetAccessToken(DataPresentation.Models.User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Secret));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var claims = GetClaims(user);
            var expirationDate = DateTime.Now.AddMinutes(_options.ExpiryMinutes);
            var jwt = new JwtSecurityToken(claims: claims, expires: expirationDate, signingCredentials: credentials);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return encodedJwt;
        }

        public string GetRefreshToken()
        {
            var randomNumber = new Byte[32];
            var rnd = RandomNumberGenerator.Create();
            rnd.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }

        public int? ValidateToken(string token)
        {
            var principal = GetPrincipal(token);
            if (principal == null) return null;
            ClaimsIdentity claimsIdentity = principal.Identity as ClaimsIdentity;
            if (claimsIdentity == null) return null;
            var userId = Int32.Parse(claimsIdentity.FindFirst("Id").Value);
            return userId;
        }

        private IEnumerable<Claim> GetClaims(DataPresentation.Models.User user)
        {
            const string delimiter = ",";
            var roles = new StringBuilder();
            foreach (var role in user.Roles)
            {
                roles.Append(role.Title);
                roles.Append(delimiter);
            }
            if (user.Roles.Count > 0) roles.Remove(roles.Length - delimiter.Length, delimiter.Length);
            return new[]
            {
                new Claim("Id", user.Id.ToString()),
                new Claim("Email", user.Email),
                new Claim("Phone", user.Phone),
                new Claim("Roles", roles.ToString())
            };
        }

        public ClaimsPrincipal GetPrincipalFromExpiredToken(string token)
        {
            var parameters = new TokenValidationParameters
            {
                ValidateAudience = false,
                ValidateIssuer = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Secret)),
                ValidateLifetime = false
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;
            var principal = tokenHandler.ValidateToken(token, parameters, out securityToken);
            var jwtSecurityToken = securityToken as JwtSecurityToken;
            if (jwtSecurityToken == null || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                throw new SecurityTokenException("Invalid token");
            return principal;
        }

        private ClaimsPrincipal GetPrincipal(string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = (JwtSecurityToken)tokenHandler.ReadJwtToken(token);
                if (jwtToken == null)
                {
                    return null;
                }
                var secretKey = Encoding.UTF8.GetBytes(_options.Secret);
                var parameters = new TokenValidationParameters
                {
                    RequireExpirationTime = true,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(secretKey)
                };
                SecurityToken securityToken;
                ClaimsPrincipal principal = tokenHandler.ValidateToken(token, parameters, out securityToken);
                return principal;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
