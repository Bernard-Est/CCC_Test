using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseClaimDetailController : ControllerBase
    {
        private readonly iExpenseClaimDetailService _service;

        public ExpenseClaimDetailController(iExpenseClaimDetailService service)
        {
            _service = service;
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<ExpenseClaimDetail>> GetbyId([FromRoute] int id)
        {
            var expenseClaimDetail = await _service.GetById(id);
            if (expenseClaimDetail == null)
            {
                return NotFound();
            }

            return Ok(expenseClaimDetail);
        }

        [HttpPost]
        public ActionResult<bool> AddExpenseClaimDetail([FromBody] ExpenseClaimDetail expenseClaimDetail)
        {
            return Ok(_service.Add(expenseClaimDetail));
        }

        [HttpPost("delete")]
        public ActionResult<bool> DeleteExpenseClaimDetail([FromBody] int id)
        {
            return Ok(_service.Delete(id));
        }

        [HttpPut]
        public ActionResult<bool> UpdateExpenseClaimDetail ([FromBody] ExpenseClaimDetail expenseClaimDetail)
        {
            return Ok(_service.Update(expenseClaimDetail));
        }

        [HttpGet("All")]
        public async Task<ActionResult<List<ExpenseClaimDetail>>> GetAllExpenseClaimDetail()
        {
            return Ok(await _service.GetAll());
        }
    }
}
