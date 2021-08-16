using FoodOrderServer.DataPresentation.Models;
using FoodOrderServer.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FoodOrderServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] RegistrationInfo registrationInfo)
        {
            var user = await _userService.Register(registrationInfo);
            if (user == null) return Conflict();
            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginInfo loginInfo)
        {
            var user = await _userService.Authenticate(loginInfo);
            if (user == null) return Unauthorized();
            return Ok(user);
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> RefreshToken()
        {

            return Ok();
        }
    }
}
