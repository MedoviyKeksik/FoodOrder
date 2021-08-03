using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodOrderServer.DataAccess.Contexts
{
    public interface IGenericContext<T> where T : class
    {
        DbSet<T> GetDbSet();
    }
}
