using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<List<T>> GetAll();
        bool Add(T entity);
        bool Update(T entity);
        bool Delete(int id);
        Task<T> GetById(int Id);

        IQueryable<T> GetQueryable();
    }

}
