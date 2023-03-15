using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Keyless]
public partial class VwrbsLogsByJobTypeTotal
{
    [Column("jobId")]
    public int JobId { get; set; }

    [Column("entryTypeId")]
    public int? EntryTypeId { get; set; }

    [Column("amount")]
    public double? Amount { get; set; }
}
