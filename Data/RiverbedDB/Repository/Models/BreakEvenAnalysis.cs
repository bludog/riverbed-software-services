using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("BreakEvenAnalysis")]
public partial class BreakEvenAnalysis
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    public double LaborPercent { get; set; }

    public double MaterialPercent { get; set; }

    public double CreditCardPercent { get; set; }

    public double RoyaltiesPercent { get; set; }

    [StringLength(50)]
    public string UserFirstName { get; set; } = null!;

    [StringLength(50)]
    public string UserLastName { get; set; } = null!;

    [StringLength(50)]
    public string CompanyName { get; set; } = null!;

    [Column(TypeName = "date")]
    public DateTime BreakEvenYear { get; set; }

    public double AverageJobSize { get; set; }

    public double ClosingRate { get; set; }

    public double LeadEstimatedConv { get; set; }

    public double IncomeGoal { get; set; }
}
