using Domain.Entities;
using Domain.Interfaces;
using Domain.NewFolder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _service;

        public EmployeeController(IEmployeeService service)
        {
            _service = service;
        }

        [HttpGet("{Id}")]       
        public async Task<ActionResult<Employee>> GetbyId([FromRoute]int id)
        {
            var employee = await _service.GetById(id);
            if(employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        [HttpPost]
        public ActionResult<bool> AddEmployee([FromBody] EmployeeAddDTO employee)
        {
            return Ok(_service.Add(employee));
        }

        [HttpPost("delete")]
        public ActionResult<bool> DeleteEmployee([FromBody] int id)
        {
            return Ok(_service.Delete(id));
        }

        [HttpPut]
        public ActionResult<bool> UpdateEmployee([FromBody] EmployeeAddDTO employee)
        {
            return Ok(_service.Update(employee));
        }

        [HttpGet("All")]
        public async Task<ActionResult<List<Employee>>> GetAllEmployee()
        {
            return Ok(await _service.GetAll());
        }
    }
}
