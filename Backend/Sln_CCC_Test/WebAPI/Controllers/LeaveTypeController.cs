using Domain.DTO;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaveTypeController : ControllerBase
    {
        private readonly ILeaveTypeService _service;

        public LeaveTypeController(ILeaveTypeService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<List<LeaveTypeDTO>>> GetAll()
        {
            return await _service.GetAll();
        }
    }
}
