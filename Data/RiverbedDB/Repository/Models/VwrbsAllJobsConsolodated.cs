﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Keyless]
public partial class VwrbsAllJobsConsolodated
{
    [Column("jobTotalActual")]
    public double? JobTotalActual { get; set; }

    [Column("jobLaborCostActual")]
    public double? JobLaborCostActual { get; set; }

    [Column("jobMaterialCostActual")]
    public double? JobMaterialCostActual { get; set; }

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

    [Column("custFirstName")]
    [StringLength(50)]
    public string CustFirstName { get; set; } = null!;

    [Column("custLastName")]
    [StringLength(50)]
    public string CustLastName { get; set; } = null!;

    [Column("statusCode")]
    [StringLength(50)]
    public string StatusCode { get; set; } = null!;

    [Column("include")]
    public bool Include { get; set; }

    [Column("crewName")]
    [StringLength(50)]
    public string CrewName { get; set; } = null!;

    [Column("firstName")]
    [StringLength(50)]
    public string? FirstName { get; set; }

    [Column("lastName")]
    [StringLength(50)]
    public string LastName { get; set; } = null!;

    [Column("entryTypeId")]
    public int? EntryTypeId { get; set; }

    [Column("jobId")]
    public int JobId { get; set; }

    [Column("parentId")]
    public int ParentId { get; set; }
}
