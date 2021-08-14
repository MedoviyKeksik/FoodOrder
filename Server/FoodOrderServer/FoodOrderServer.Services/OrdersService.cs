using FoodOrderServer.DataAccess;
using FoodOrderServer.DataPresentation.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.Services
{
    public class OrdersService : BaseService
    {
        public OrdersService(IUnitOfWork unitOfWork) 
            : base(unitOfWork)
        {
        }

        public async Task<List<Order>> GetByUser(int userId)
        {
            return await _db.Orders.GetAll()
                .Where(order => order.UserId == userId)
                .Select(order => new Order
                {
                    Id = order.Id,
                    Status = order.Status,
                    UserId = order.UserId,
                    Time = order.Time
                }).ToListAsync();
        }

        public async Task<Order> GetById(int orderId)
        {
            var order = await _db.Orders.Get(orderId);
            return new Order
            {
                Id = order.Id,
                Status = order.Status,
                Time = order.Time,
                UserId = order.UserId
            };
        }

        public async Task Add(Order order)
        {
            var food = order.Food.Select(foodInOrder => new DataAccess.Entities.FoodInOrder
            {
                FoodId = foodInOrder.FoodId,
                Count = foodInOrder.Count
            });
            await _db.Orders.Add(new DataAccess.Entities.Order
            {
                Status = order.Status,
                Time = order.Time,
                UserId = order.UserId
            });
            await _db.Save();
        }

        public async Task Update(Order order)
        {
            var editOrder = _db.Orders.Get(order.Id).Result;
            if (editOrder == null) return;

            editOrder.Status = order.Status;
            editOrder.FoodInOrder = order.Food.Select(foodInOrder => new DataAccess.Entities.FoodInOrder
            {
                Count = foodInOrder.Count,
                FoodId = foodInOrder.FoodId
            }).ToList();

            _db.Orders.Update(editOrder);
            await _db.Save();
        }

        public async void Delete(int orderId)
        {
            _db.Orders.Delete(orderId);
            await _db.Save();
        }

    }
}
