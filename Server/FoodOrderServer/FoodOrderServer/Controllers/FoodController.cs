using FoodOrderServer.DataPresentation;
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
        private FoodService<Food> _dataManager;
        FoodController(FoodService<Food> dataManager)
        {
            _dataManager = dataManager;
        }
        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<Food> Get()
        {
            List<Food> food;
            using (FoodContext foodContext = new FoodContext())
            {
                food = _dataManager.Get(foodContext.Data.ToList(), 0, 1);
            }
            return food;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
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
