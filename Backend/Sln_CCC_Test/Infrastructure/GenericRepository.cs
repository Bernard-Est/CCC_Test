using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly HRContext _context;

        public GenericRepository(HRContext context)
        {
            _context = context;
        }

        public bool Add(T entity)
        {
           _context.Set<T>().Add(entity);
           return _context.SaveChanges() > 0;
        }

        public bool Delete(int Id)
        {
            var entity = _context.Set<T>().FirstOrDefault(x => x.Id == Id);
            _context.Set<T>().Remove(entity);
            return _context.SaveChanges() > 0;
        }

        public async Task<List<T>> GetAll()
        {
            return await _context.Set<T>().OrderByDescending(d => d.CreationDate).ToListAsync();
        }

        public async Task<T> GetById(int Id)
        {
            return await _context.Set<T>().FindAsync(Id);
        }

        public IQueryable<T> GetQueryable()
        {
            return _context.Set<T>().AsQueryable();
        }

        public bool Update(T entity)
        {
            _context.Set<T>().Update(entity);
            return _context.SaveChanges() > 0;
        }
    }
}
