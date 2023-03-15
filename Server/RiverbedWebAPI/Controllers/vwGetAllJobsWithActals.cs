using Business.Server.Data.Repository;
using Business.Server.Data.Repository.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RiverbedWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class vwGetAllJobsWithActals : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public vwGetAllJobsWithActals(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: api/<vwGetAllJobsWithActals>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VwrbsAllJobsWithActual>>> GetAllJobsWithActualsAsync()
        {
            if (_context.VwrbsAllJobsWithActuals == null)
            {
                return NotFound();
            }
            return await _context.VwrbsAllJobsWithActuals.ToListAsync();
        }

        // GET api/<vwGetAllJobsWithActals>/5
        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<VwrbsAllJobsWithActual>>> GetUserJobsWithActualsAsync(int userId)
        {
            if (_context.VwrbsAllJobsWithActuals == null)
            {
                return NotFound();
            }
            var rbsJobWActual = _context.VwrbsAllJobsWithActuals.ToListAsync().Result.Where(predicate: job => job.ParentId == userId).ToList();

            if (rbsJobWActual == null)
            {
                return NotFound();
            }

            return rbsJobWActual;
        }               
    }
}
