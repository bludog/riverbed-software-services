using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("JobsPEP")]
public partial class JobsPep
{
    [Key]
    [Column("id")]
    public short Id { get; set; }

    [Column("firstName")]
    [StringLength(50)]
    public string FirstName { get; set; } = null!;

    [Column("lastName")]
    [StringLength(50)]
    public string? LastName { get; set; }

    [Column("companyName")]
    [StringLength(50)]
    public string? CompanyName { get; set; }

    [Column("address1")]
    [StringLength(50)]
    public string? Address1 { get; set; }

    [Column("city")]
    [StringLength(50)]
    public string? City { get; set; }

    [Column("state")]
    [StringLength(50)]
    public string? State { get; set; }

    [Column("zipcode")]
    [StringLength(50)]
    public string? Zipcode { get; set; }

    [Column("leadSource")]
    [StringLength(50)]
    public string? LeadSource { get; set; }

    [Column("jobCreateDate", TypeName = "datetime")]
    public DateTime? JobCreateDate { get; set; }

    [Column("jobStatus")]
    [StringLength(50)]
    public string? JobStatus { get; set; }

    [Column("jobName")]
    [StringLength(100)]
    public string? JobName { get; set; }

    [Column("jobType")]
    [StringLength(50)]
    public string? JobType { get; set; }

    [Column("jobLab")]
    public double JobLab { get; set; }

    [Column("jobLabTot")]
    public double JobLabTot { get; set; }

    [Column("jobMat")]
    public double JobMat { get; set; }

    [Column("jobMatDisc")]
    public double? JobMatDisc { get; set; }

    [Column("jobMatTot")]
    public double JobMatTot { get; set; }

    [Column("jobGndTot")]
    public double JobGndTot { get; set; }
}
