using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseClaimController : ControllerBase
    {
        private readonly IExpenseClaimService _service;

        public ExpenseClaimController(IExpenseClaimService service)
        {
            _service = service;
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<ExpenseClaim>> GetbyId([FromRoute] int id)
        {
            var expenseClaim = await _service.GetById(id);
            if (expenseClaim == null)
            {
                return NotFound();
            }

            return Ok(expenseClaim);
        }

        [HttpPost]
        public ActionResult<bool> AddExpenseClaim([FromBody] ExpenseClaim expenseClaim)
        {
            return Ok(_service.Add(expenseClaim));
        }

        [HttpPost("delete")]
        public ActionResult<bool> DeleteExpenseClaim([FromBody] int id)
        {
            return Ok(_service.Delete(id));
        }

        [HttpPut]
        public ActionResult<bool> UpdateExpenseClaim([FromBody] ExpenseClaim expenseClaim)
        {
            return Ok(_service.Update(expenseClaim));
        }

        [HttpGet("All")]
        public async Task<ActionResult<List<ExpenseClaim>>> GetAllExpenseClaim()
        {
            return Ok(await _service.GetAll());
        }
    }
}
