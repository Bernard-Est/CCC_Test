using Domain.DTO;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartementService _service;

        public DepartmentController(IDepartementService service)
        {
            _service = service;
        }

        [HttpGet("All")]
        public async Task<ActionResult<List<DepartmentDTO>>> GetAll()
        {
            return await _service.GetAll();
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Department>> GetbyId([FromRoute] int id)
        {
            var department = await _service.GetById(id);
            if (department == null)
            {
                return NotFound();
            }

            return Ok(department);
        }

    }
}
