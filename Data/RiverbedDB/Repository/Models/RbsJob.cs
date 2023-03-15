using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("rbsJob")]
public partial class RbsJob
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("jobName")]
    [StringLength(50)]
    public string JobName { get; set; } = null!;

    [Column("jobDescription")]
    public string? JobDescription { get; set; }

    [Column("dateBooked", TypeName = "datetime")]
    public DateTime DateBooked { get; set; }

    [Column("dateCompleted", TypeName = "datetime")]
    public DateTime? DateCompleted { get; set; }

    [Column("jobTotal")]
    public double JobTotal { get; set; }

    [Column("jobLaborCost")]
    public double JobLaborCost { get; set; }

    [Column("jobMaterialCost")]
    public double JobMaterialCost { get; set; }

    [Column("jobOverheadCost")]
    public double JobOverheadCost { get; set; }

    [Column("jobTotalActual")]
    public double JobTotalActual { get; set; }

    [Column("jobLaborCostActual")]
    public double JobLaborCostActual { get; set; }

    [Column("jobMaterialCostActual")]
    public double JobMaterialCostActual { get; set; }

    [Column("jobOverheadCostActual")]
    public double JobOverheadCostActual { get; set; }

    [Column("jobStatusId")]
    public int JobStatusId { get; set; }

    [Column("custFirstName")]
    [StringLength(50)]
    public string CustFirstName { get; set; } = null!;

    [Column("custLastName")]
    [StringLength(50)]
    public string CustLastName { get; set; } = null!;

    [Column("parentId")]
    public int ParentId { get; set; }

    //[Required]
    [Column("include")]
    public bool? Include { get; set; }

    [Column("crewId")]
    public int CrewId { get; set; }

    [ForeignKey("CrewId")]
    [InverseProperty("RbsJobs")]
    public virtual RbsCrew Crew { get; set; } = null!;

    [ForeignKey("ParentId")]
    [InverseProperty("RbsJobs")]
    public virtual RbsUser Parent { get; set; } = null!;
}
