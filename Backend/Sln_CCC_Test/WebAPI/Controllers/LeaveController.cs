using Domain.DTO;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaveController : ControllerBase
    {
        private readonly ILeaveService _service;

        public LeaveController(ILeaveService service)
        {
            _service = service;
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Leave>> GetbyId([FromRoute] int id)
        {
            var leave = await _service.GetById(id);
            if (leave == null)
            {
                return NotFound();
            }

            return Ok(leave);
        }

        [HttpPost]
        public ActionResult<bool> AddLeave([FromBody] LeaveAddDTO leave)
        {
            return Ok(_service.Add(leave));
        }

        [HttpPost("delete")]
        public ActionResult<bool> DeleteLeave([FromBody] int id)
        {
            return Ok(_service.Delete(id));
        }

        [HttpPut]
        public ActionResult<bool> UpdateLeave([FromBody] LeaveAddDTO leave)
        {
            return Ok(_service.Update(leave));
        }

        [HttpGet("All")]
        public async Task<ActionResult<List<Leave>>> GetAllLeave()
        {
            return Ok(await _service.GetAll());
        }
    }
}
