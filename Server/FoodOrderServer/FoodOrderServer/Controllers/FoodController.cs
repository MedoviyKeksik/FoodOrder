using FoodOrderServer.DataPresentation.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using FoodOrderServer.Services.Interfaces;

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

        // GET api/<ValuesController>/5
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetFoodById(int id)
        {
            var food = await _foodService.GetById(id);
            if (food == null) return NotFound();
            return Ok(food);
        }

        // POST api/<ValuesController>
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Administrator")]
        [HttpPost]
        public async Task AddFood([FromBody] FullFood food)
        {
            await _foodService.Add(food);
        }

        // PUT api/<ValuesController>/5
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Administrator")]
        [HttpPut("{id:int}")]
        public async Task UpdateFood(int id, [FromBody] FullFood food)
        {
            if (food.Id == id)
            {
                await _foodService.Update(food);
            }
        }

        // DELETE api/<ValuesController>/5
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Administrator")]
        [HttpDelete("{id:int}")]
        public async Task DeleteFood(int id)
        {
            await _foodService.Delete(id);
        }
    }
}
