using FoodOrderServer.DataPresentation.Models;
using FoodOrderServer.DataAccess;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodOrderServer.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FoodOrderServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private FoodService _foodService;
        public FoodController(FoodService foodService)
        {
            _foodService = foodService;
        }
        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<Food> Get(string locale, int offset, int count)
        {
            return _foodService.Get(locale, offset, count);
        }

        // GET api/<ValuesController>/5
        [HttpGet("{locale}/{id}")]
        public string Get(int id, string locale)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
