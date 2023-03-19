using Business.Server.Data;
using Business.Server.Data.Repository.Models;
using System.Threading.Tasks;

namespace Business.Server.Data
{
    public interface IRbBusinessService
    {
        #region RbsUser CRUD
        Task<List<RbsUser>> GetAllRbsUsers();
        Task CreateRbsUser(RbsUser user);
        Task UpdateRbsUser(RbsUser user);
        Task DeleteRbsUser(int id);
        Task<RbsUser> GetRbsUser(int id);

        Task<RbsUser> GetRbsUserByEmail(string email);
        #endregion

        Task<List<VwrbsAllJobsWithActual>> GetRbsJobs(int id);
        Task<List<RbsJob>> GetRbsJobsByUser(int id);
        Task<List<RbsCrew>> GetRbsCrews(int id);
        Task<List<RbsStatusCode>> GetRbsJobStatusCodes();

        #region RbsJob CRUD
        Task<RbsJob> GetRbsJob(int id);
        Task DeleteRbsJob(int id);
        Task CreateRbsJob(RbsJob job);
        Task UpdateRbsJob(RbsJob job);
        #endregion

        #region RbsCrew CRUD
        Task<List<RbsCrew>> GetAllRbsCrews(int id);
        Task CreateRbsCrew(RbsCrew rbscrew);
        Task UpdateRbsCrew(RbsCrew rbscrew);
        Task DeleteRbsCrew(int id);
        Task<RbsCrew> GetRbsCrew(int id);
        #endregion

        #region RbsLogEntry CRUD
        Task<List<RbsLogEntry>> GetAllRbsLogEntrys(int id);
        Task CreateRbsLogEntry(RbsLogEntry rbslogentry);
        Task UpdateRbsLogEntry(RbsLogEntry rbslogentry);
        Task DeleteRbsLogEntry(int id);
        Task<RbsLogEntry> GetRbsLogEntry(int id);
        #endregion

        #region RbsStatusCode CRUD
        Task<List<RbsStatusCode>> GetAllRbsStatusCodes();
        Task CreateRbsStatusCode(RbsStatusCode rbsstatuscode);
        Task UpdateRbsStatusCode(RbsStatusCode rbsstatuscode);
        Task DeleteRbsStatusCode(int id);
        Task<RbsStatusCode> GetRbsStatusCode(int id);
        #endregion

        #region RbsEntryType CRUD
        Task<List<RbsEntryType>> GetAllRbsEntryTypes();
        Task CreateRbsEntryType(RbsEntryType rbsentrytype);
        Task UpdateRbsEntryType(RbsEntryType rbsentrytype);
        Task DeleteRbsEntryType(int id);
        Task<RbsEntryType> GetRbsEntryType(int id);
        #endregion

    }
}
