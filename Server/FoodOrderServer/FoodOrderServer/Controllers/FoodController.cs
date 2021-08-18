using FoodOrderServer.DataPresentation.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using FoodOrderServer.Services.Interfaces;
using FoodOrderServer.DataPresentation.Roles;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FoodOrderServer.Controllers
{
    [Route("api/food")]
    public class FoodController : Controller
    {
        private readonly IFoodService _foodService;
        public FoodController(IFoodService foodService)
        {
            _foodService = foodService;
        }

        [HttpGet]
        public async Task<IActionResult> GetFoodItems(string locale, int offset, int count)
        {;
            var food = await _foodService.GetItems(locale, offset, count);
            return Ok(food);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetFoodById(int id)
        {
            var food = await _foodService.GetById(id);
            if (food == null) return NotFound();
            return Ok(food);
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = Roles.Admin)]
        [HttpPost]
        public async Task<IActionResult> AddFood([FromBody] FoodInfoModel food)
        {
            await _foodService.Add(food);
            return Ok();
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = Roles.Admin)]
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateFood(int id, [FromBody] FullFood food)
        {
            if (food.Id == id)
            {
                await _foodService.Update(food);
                return Ok();
            }
            return BadRequest();
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = Roles.Admin)]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteFood(int id)
        {
            await _foodService.Delete(id);
            return Ok();
        }
    }
}
