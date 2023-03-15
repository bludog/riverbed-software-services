using System;
using System.Collections.Generic;
using Business.Server.Data.Repository.Models;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository;

public partial class CustomerDbContext : DbContext
{
    public CustomerDbContext()
    {
    }

    public CustomerDbContext(DbContextOptions<CustomerDbContext> options)
        : base(options)
    {
    }

    
    public virtual DbSet<BasicCompanySetting> BasicCompanySettings { get; set; }

    public virtual DbSet<BasicCustomer> BasicCustomers { get; set; }

    public virtual DbSet<BasicJob> BasicJobs { get; set; }

    public virtual DbSet<BasicRoom> BasicRooms { get; set; }

    public virtual DbSet<BreakEvenAnalysis> BreakEvenAnalyses { get; set; }

    public virtual DbSet<BreakEvenType> BreakEvenTypes { get; set; }

    public virtual DbSet<JobsPep> JobsPeps { get; set; }

   
    public virtual DbSet<RbsAllJob> RbsAllJobs { get; set; }

    public virtual DbSet<RbsCrew> RbsCrews { get; set; }

    public virtual DbSet<RbsCustomer> RbsCustomers { get; set; }

    public virtual DbSet<RbsEntryType> RbsEntryTypes { get; set; }

    public virtual DbSet<RbsJob> RbsJobs { get; set; }

    public virtual DbSet<RbsLogEntry> RbsLogEntries { get; set; }

    public virtual DbSet<RbsStatusCode> RbsStatusCodes { get; set; }

    public virtual DbSet<RbsUser> RbsUsers { get; set; }

    public virtual DbSet<VwrbsAllJob> VwrbsAllJobs { get; set; }

    public virtual DbSet<VwrbsAllJobsConsolodated> VwrbsAllJobsConsolodateds { get; set; }

    public virtual DbSet<VwrbsAllJobsWithActual> VwrbsAllJobsWithActuals { get; set; }

    public virtual DbSet<VwrbsLogsByJobTypeTotal> VwrbsLogsByJobTypeTotals { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=s26.winhost.com;Persist Security Info=True;User ID=DB_151509_riverbed_user;Password=Eatmorechicken1");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
        modelBuilder.Entity<BasicCompanySetting>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_BasicSettings");

            entity.Property(e => e.CompanyRate).HasDefaultValueSql("((30))");
            entity.Property(e => e.MaterialMarkupPercent).HasDefaultValueSql("((10))");
            entity.Property(e => e.PainterRate).HasDefaultValueSql("((30))");
        });

        modelBuilder.Entity<BasicJob>(entity =>
        {
            entity.Property(e => e.PaintLevelId).HasDefaultValueSql("((1))");
        });

        modelBuilder.Entity<BasicRoom>(entity =>
        {
            entity.Property(e => e.Doors).HasDefaultValueSql("((2))");
            entity.Property(e => e.Height).HasDefaultValueSql("((9))");
            entity.Property(e => e.IncludeBaseboards).HasDefaultValueSql("((1))");
            entity.Property(e => e.IncludeCeiling).HasDefaultValueSql("((1))");
            entity.Property(e => e.IncludeWalls).HasDefaultValueSql("((1))");
            entity.Property(e => e.Length).HasDefaultValueSql("((10))");
            entity.Property(e => e.PaintLevelId).HasDefaultValueSql("((1))");
            entity.Property(e => e.PrepSetupCleanTime).HasDefaultValueSql("((0.5))");
            entity.Property(e => e.RoomName).HasDefaultValueSql("('Room')");
            entity.Property(e => e.Width).HasDefaultValueSql("((10))");
            entity.Property(e => e.Windows).HasDefaultValueSql("((1))");
        });

        modelBuilder.Entity<BreakEvenAnalysis>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_BreakEvenTypeId");

            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<BreakEvenType>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<JobsPep>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
        });
                

        modelBuilder.Entity<RbsAllJob>(entity =>
        {
            entity.ToView("rbsAllJobs");
        });

        modelBuilder.Entity<RbsCustomer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_RBCustomer");

            entity.Property(e => e.DateCreated).HasDefaultValueSql("(getdate())");
        });

        modelBuilder.Entity<RbsJob>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_Job");

            entity.Property(e => e.CustFirstName).HasDefaultValueSql("(N'noName')");
            entity.Property(e => e.CustLastName).HasDefaultValueSql("(N'noName')");
            entity.Property(e => e.DateBooked).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.Include).HasDefaultValueSql("((1))");
            entity.Property(e => e.JobStatusId).HasDefaultValueSql("((1))");

            entity.HasOne(d => d.Crew).WithMany(p => p.RbsJobs)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_rbsJob_rbsCrew");

            entity.HasOne(d => d.Parent).WithMany(p => p.RbsJobs)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_rbsJob_rbsStatusCode");
        });

        modelBuilder.Entity<RbsLogEntry>(entity =>
        {
            entity.Property(e => e.DateAdded).HasDefaultValueSql("(getdate())");
        });

        modelBuilder.Entity<RbsUser>(entity =>
        {
            entity.Property(e => e.DateAdded).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.DateLastAccessed).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.EmailAddress).HasDefaultValueSql("(N'noemail@email.com')");
            entity.Property(e => e.IsActive).HasDefaultValueSql("((1))");
        });

       

        modelBuilder.Entity<VwrbsAllJob>(entity =>
        {
            entity.ToView("vwrbsAllJobs");
        });

        modelBuilder.Entity<VwrbsAllJobsConsolodated>(entity =>
        {
            entity.ToView("_vwrbsAllJobsConsolodated");
        });
               
        modelBuilder.Entity<VwrbsAllJobsWithActual>(entity =>
        {
            entity.ToView("vwrbsAllJobsWithActuals");
        });

        modelBuilder.Entity<VwrbsLogsByJobTypeTotal>(entity =>
        {
            entity.ToView("vwrbsLogsByJobTypeTotal");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
