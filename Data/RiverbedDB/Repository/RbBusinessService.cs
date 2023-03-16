using AutoMapper;
using Business.Server.Data.Repository;
using Business.Server.Data.Repository.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel;
using System.Threading.Tasks;


namespace Business.Server.Data
{
    public class RbBusinessService : IRbBusinessService
    {
        public CustomerDbContext _context { get; set; }
        public Mapper _mapper { get; set; }

        public RbBusinessService(CustomerDbContext context)
        {
            _context = context;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<RbsJob, RbsJob>();
                cfg.CreateMap<RbsCrew, RbsCrew>();
                cfg.CreateMap<RbsEntryType, RbsEntryType>();
                cfg.CreateMap<RbsLogEntry, RbsLogEntry>();
                cfg.CreateMap<RbsStatusCode, RbsStatusCode>();
                cfg.CreateMap<RbsUser, RbsUser>();
            });

            _mapper = new Mapper(config);
        }

        #region RbsUser CRUD
        public async Task<List<RbsUser>> GetAllRbsUsers()
        {
            var users = await _context.RbsUsers.ToListAsync();
            if (users == null)
                throw new Exception("No Users Found.");
            return users;
        }


        public async Task CreateRbsUser(RbsUser user)
        {
            _context.RbsUsers.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateRbsUser(RbsUser user)
        {
            var usr = await _context.RbsUsers.FindAsync(user.Id);
            if (usr == null)
                throw new Exception("No User found to Update.");

            usr.FirstName = user.FirstName;
            usr.LastName = user.LastName;
            usr.EmailAddress = user.EmailAddress;
            usr.Id = user.Id;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteRbsUser(int id)
        {
            var usr = await _context.RbsUsers.FindAsync(id);
            if (usr == null)
                throw new Exception("No User found to Update.");

            _context.RbsUsers.Remove(usr);
            await _context.SaveChangesAsync();
        }

        public async Task<RbsUser> GetRbsUser(int id)
        {
            var usr = await _context.RbsUsers.FindAsync(id);
            if (usr == null)
                throw new Exception("No User found to Update.");

            return usr;
        }
        #endregion

        public async Task<List<VwrbsAllJobsWithActual>> GetRbsJobs(int userId)
        {
            if (_context.VwrbsAllJobsWithActuals == null)
            {
                throw new Exception("No Jobs found.");
            }
            var rbsJobWActual = await _context.VwrbsAllJobsWithActuals.Where(job => job.ParentId == userId).ToListAsync();

            if (rbsJobWActual == null)
            {
                throw new Exception("No User Jobs found.");
            }

            return rbsJobWActual;
        }

        public async Task<List<RbsJob>> GetRbsJobsByUser(int userId)
        {
            if (_context.RbsJobs == null)
            {
                throw new Exception("No Jobs found.");
            }
            var rbsJobWActual = await _context.RbsJobs.Where(job => job.ParentId == userId).ToListAsync();

            if (rbsJobWActual == null)
            {
                throw new Exception("No User Jobs found.");
            }

            return rbsJobWActual;
        }

        public async Task<List<RbsCrew>> GetRbsCrews(int id)
        {
            if (_context.RbsCrews == null)
            {
                throw new Exception("No Jobs found.");
            }
            var rbsCrews = await _context.RbsCrews.ToListAsync();

            if (rbsCrews == null)
            {
                throw new Exception("No User Jobs found.");
            }

            return rbsCrews;
        }

        public async Task<List<RbsStatusCode>> GetRbsJobStatusCodes()
        {
            if (_context.RbsStatusCodes == null)
            {
                throw new Exception("No Jobs found.");
            }
            var rbsStatusCodes = await _context.RbsStatusCodes.ToListAsync();

            if (rbsStatusCodes == null)
            {
                throw new Exception("No User Jobs found.");
            }

            return rbsStatusCodes;
        }

        #region RbsJob CRUD

        public async Task<RbsJob> GetRbsJob(int id)
        {
            if (_context.RbsJobs == null)
            {
                throw new Exception("No Jobs found.");
            }
            var rbsJob = await _context.RbsJobs.FindAsync(id);

            if (rbsJob == null)
            {
                throw new Exception("No Jobs found.");
            }

            return rbsJob;
        }

        public async Task DeleteRbsJob(int id)
        {
            var rbsJob = _context.RbsJobs.FirstOrDefault(j => j.Id == id); ;
            if (rbsJob == null)
            {
                throw new Exception("No Job found.");
            }

            _context.RbsJobs.Remove(rbsJob);
            _context.SaveChangesAsync();

            return;
        }

        public async Task CreateRbsJob(RbsJob job)
        {
            _context.RbsJobs.Add(job);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateRbsJob(RbsJob job)
        {
            var dbJob = _context.RbsJobs.FirstOrDefault(j => j.Id == job.Id);

            try
            {
                if (dbJob != null)
                {
                    //dbJob = _mapper.Map<RbsJob, RbsJob>(job);
                    dbJob.JobDescription = job.JobDescription;
                    dbJob.JobTotal = job.JobTotal;
                    dbJob.JobTotalActual = job.JobTotalActual;
                    dbJob.JobLaborCost = job.JobLaborCost;
                    dbJob.JobLaborCostActual = job.JobLaborCostActual;
                    dbJob.JobMaterialCost = job.JobMaterialCost;
                    dbJob.JobMaterialCostActual = job.JobMaterialCostActual;
                    dbJob.CrewId = job.CrewId;
                    dbJob.CustFirstName = job.CustFirstName;
                    dbJob.CustLastName = job.CustLastName;
                    dbJob.JobName = job.JobName;
                    dbJob.JobOverheadCost = job.JobOverheadCost;
                    dbJob.JobOverheadCostActual = job.JobOverheadCostActual;
                    dbJob.JobStatusId = job.JobStatusId;
                    dbJob.DateBooked = job.DateBooked;
                    dbJob.DateCompleted = job.DateCompleted;
                    dbJob.ParentId = job.ParentId;
                }
                else
                {
                    throw new Exception("No Job found.");
                }

                _context.Entry(dbJob).State = EntityState.Modified;

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return;
        }

        private bool RbsJobExists(int id)
        {
            return (_context.RbsJobs?.Any(e => e.Id == id)).GetValueOrDefault();
        }
        #endregion

        #region RbsCrew CRUD
        public async Task<List<RbsCrew>> GetAllRbsCrews(int id)
        {
            var Rbscrews = await _context.RbsCrews.ToListAsync();
            if (Rbscrews == null)
                throw new Exception("No Matches Found.");
            return Rbscrews;
        }

        public async Task CreateRbsCrew(RbsCrew Rbscrew)
        {
            _context.RbsCrews.Add(Rbscrew);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateRbsCrew(RbsCrew Rbscrew)
        {
            var val = await _context.RbsCrews.FindAsync(Rbscrew.Id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            val.Id = Rbscrew.Id;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteRbsCrew(int id)
        {
            var val = await _context.RbsCrews.FindAsync(id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            _context.RbsCrews.Remove(val);
            await _context.SaveChangesAsync();
        }

        public async Task<RbsCrew> GetRbsCrew(int id)
        {
            var val = await _context.RbsCrews.FindAsync(id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            return val;
        }

        #endregion

        #region RbsEntryType CRUD
        public async Task<List<RbsEntryType>> GetAllRbsEntryTypes()
        {
            var Rbsentrytypes = await _context.RbsEntryTypes.ToListAsync();
            if (Rbsentrytypes == null)
                throw new Exception("No Matches Found.");
            return Rbsentrytypes;
        }

        public async Task CreateRbsEntryType(RbsEntryType Rbsentrytype)
        {
            _context.RbsEntryTypes.Add(Rbsentrytype);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateRbsEntryType(RbsEntryType Rbsentrytype)
        {
            var val = await _context.RbsEntryTypes.FindAsync(Rbsentrytype.Id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            val.Id = Rbsentrytype.Id;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteRbsEntryType(int id)
        {
            var val = await _context.RbsEntryTypes.FindAsync(id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            _context.RbsEntryTypes.Remove(val);
            await _context.SaveChangesAsync();
        }

        public async Task<RbsEntryType> GetRbsEntryType(int id)
        {
            var val = await _context.RbsEntryTypes.FindAsync(id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            return val;
        }

        #endregion

        #region RbsLogEntry CRUD
        public async Task<List<RbsLogEntry>> GetAllRbsLogEntrys(int id)
        {
            var Rbslogentrys = await _context.RbsLogEntries.Where(l => l.JobId == id).ToListAsync();
            if (Rbslogentrys == null)
                throw new Exception("No Matches Found.");
            return Rbslogentrys;
        }

        public async Task CreateRbsLogEntry(RbsLogEntry Rbslogentry)
        {
            _context.RbsLogEntries.Add(Rbslogentry);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateRbsLogEntry(RbsLogEntry Rbslogentry)
        {
            var val = await _context.RbsLogEntries.FindAsync(Rbslogentry.Id);
            if (val == null)
                throw new Exception("No Match found to Update.");

            //val.Id = Rbslogentry.Id;
            val.JobId = Rbslogentry.JobId;
            val.DateAdded = Rbslogentry.DateAdded;
            val.Amount = Rbslogentry.Amount;
            val.LogDescription = Rbslogentry.LogDescription;

           // _context.Update<RbsLogEntry>(val);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteRbsLogEntry(int id)
        {
            var val = await _context.RbsLogEntries.FindAsync(id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            _context.RbsLogEntries.Remove(val);
            await _context.SaveChangesAsync();
        }

        public async Task<RbsLogEntry> GetRbsLogEntry(int id)
        {
            var val = await _context.RbsLogEntries.FindAsync(id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            return val;
        }

        #endregion

        #region RbsStatusCode CRUD
        public async Task<List<RbsStatusCode>> GetAllRbsStatusCodes()
        {
            var Rbsstatuscodes = await _context.RbsStatusCodes.ToListAsync();
            if (Rbsstatuscodes == null)
                throw new Exception("No Matches Found.");
            return Rbsstatuscodes;
        }

        public async Task CreateRbsStatusCode(RbsStatusCode Rbsstatuscode)
        {
            _context.RbsStatusCodes.Add(Rbsstatuscode);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateRbsStatusCode(RbsStatusCode Rbsstatuscode)
        {
            var val = await _context.RbsStatusCodes.FindAsync(Rbsstatuscode.Id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            val.Id = Rbsstatuscode.Id;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteRbsStatusCode(int id)
        {
            var val = await _context.RbsStatusCodes.FindAsync(id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            _context.RbsStatusCodes.Remove(val);
            await _context.SaveChangesAsync();
        }

        public async Task<RbsStatusCode> GetRbsStatusCode(int id)
        {
            var val = await _context.RbsStatusCodes.FindAsync(id);
            if (val == null)
                throw new Exception("No Match found to Update.");
            return val;
        }

        #endregion

    }
}
