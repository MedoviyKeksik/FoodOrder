using FoodOrderServer.DataPresentation.Models;
using FoodOrderServer.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FoodOrderServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private OrdersService _ordersService;
        public OrdersController(OrdersService ordersService)
        {
            _ordersService = ordersService;
        }

        // GET: api/<OrdersController>
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var order = await _ordersService.GetById(id);
            return Ok(order);
        }

        // GET api/<OrdersController>/5
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("/user/{id}")]
        public async Task<IActionResult> GetByUserId(int id)
        {
            var orders = await _ordersService.GetByUser(id);
            return Ok(orders);
        }

        // POST api/<OrdersController>
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task Post([FromBody] Order order)
        {
            await _ordersService.Add(order);
        }

        // PUT api/<OrdersController>/5
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody] Order order)
        {
            if (id == order.Id) {
                await _ordersService.Update(order);
            }
        }

        // DELETE api/<OrdersController>/5
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _ordersService.Delete(id);
        }
    }
}
