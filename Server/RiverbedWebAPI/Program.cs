using Microsoft.EntityFrameworkCore;
using Business.Server.Data;
using Business.Server.Data.Repository;
using Business.Server.Data.Repository.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<CustomerDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CustomerDatabase")));

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddScoped<IRbBusinessService, RbBusinessService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowAll");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// To Regenerate Data objects from database
// dotnet ef dbcontext scaffold "Data Source=s26.winhost.com;Persist Security Info=True;User ID=DB_151509_riverbed_user;Password=Eatmorechicken1" Microsoft.EntityFrameworkCore.SqlServer -o Models --force --project RiverbedWebAPI

/**************************************************************************
 * Define all WEB API Endpoints
 **************************************************************************/
#region BreakEvenType CRUD WebAPI

//app.MapGet("/api/BreakEvenTypes", async (Db151509RiverbedContext ctx) =>
//    await ctx.BreakEvenTypes.ToListAsync());

//app.MapGet("/api/BreakEvenTypes/{id}", async (int id, Db151509RiverbedContext ctx) =>
//    await ctx.BreakEvenTypes.FindAsync(id)
//                    is BreakEvenType breakEvenType
//                        ? Results.Ok(breakEvenType)
//                        : Results.NotFound());

//app.MapPost("/api/BreakEvenTypes", async (BreakEvenType betype, Db151509RiverbedContext ctx) =>
//{
//    var newBreakEven = new BreakEvenType()
//    {
//        Id = betype.Id,
//        BreakEvenTypeDesc = betype.BreakEvenTypeDesc
//    };

//    await ctx.BreakEvenTypes.AddAsync(newBreakEven);
//    await ctx.SaveChangesAsync();
//    return Results.Created($"/api/BreakEvenTypes/{betype.Id}", betype);
//});

//app.MapPut("/api/BreakEvenTypes/{id}", async (int id, BreakEvenType betype, Db151509RiverbedContext ctx) =>
//{
//    var breakEven = await ctx.BreakEvenTypes.FindAsync(id);

//    if (breakEven is null) return Results.NotFound();

//    // Set each values
//    breakEven.BreakEvenTypeDesc = betype.BreakEvenTypeDesc;

//    await ctx.SaveChangesAsync();
//    return Results.NoContent();
//});

//app.MapDelete("/api/BreakEvenTypes/{id}", async (int id, Db151509RiverbedContext db) =>
//{
//    if (await db.BreakEvenTypes.FindAsync(id) is BreakEvenType betype)
//    {
//        db.BreakEvenTypes.Remove(betype);
//        await db.SaveChangesAsync();
//        return Results.Ok(betype);
//    }

//    return Results.NotFound();
//});

#endregion


app.MapGet("/api/PEPJobs", async (CustomerDbContext ctx) =>
    await ctx.JobsPeps.ToListAsync());


app.Run();
