using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Business.Server.Data.Repository.Models;

[Table("rbsCustomer")]
public partial class RbsCustomer
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("firstName")]
    [StringLength(50)]
    public string? FirstName { get; set; }

    [Column("lastName")]
    [StringLength(50)]
    public string LastName { get; set; } = null!;

    [Column("dateCreated", TypeName = "datetime")]
    public DateTime DateCreated { get; set; }

    [Column("companyName")]
    [StringLength(50)]
    public string? CompanyName { get; set; }

    [Column("userId")]
    public int UserId { get; set; }
}
