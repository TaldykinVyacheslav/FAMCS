using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Framework.OptionsModel;

namespace Famcs.Models
{
    public class FamcsContext : IdentityDbContext<User, Role, long>
    {
        public FamcsContext() : base()
        {
            Database.EnsureCreated();

        }
        public DbSet<Faculty> Faculties { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Specialty> Specialties { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            ConfigureDataBaseEntities(builder);
            ConfigureDataBasereferences(builder);
        }

        protected void ConfigureDataBaseEntities(ModelBuilder builder)
        {
            builder.Entity<User>(user =>
            {
                user.ToTable("Users");
                user.HasKey(t => t.Id);
                user.HasOne(t => t.Department).WithMany(t => t.Professors).ForeignKey(t => t.DepartmentId).PrincipalKey(t => t.Id);
            });
            builder.Entity<Role>().ToTable("Roles");
            builder.Entity<IdentityRoleClaim<Int64>>().ToTable("RoleClaims");
            builder.Entity<IdentityUserRole<Int64>>().ToTable("UserRoles");
            builder.Entity<IdentityUserLogin<Int64>>().ToTable("UserLogins");
            builder.Entity<IdentityUserClaim<Int64>>().ToTable("UserClaims");

            builder.Entity<Faculty>(faculty => 
            {
                faculty.HasKey(t => t.Id);
                faculty.Property(a => a.Id).ValueGeneratedOnAdd();
            });

            builder.Entity<Department>(departament =>
            {
                departament.HasKey(t => t.Id);
                departament.Property(a => a.Id).ValueGeneratedOnAdd();
            });

            builder.Entity<Specialty>(specialty =>
            {

            });

            builder.Entity<Group>(group =>
            {
                group.HasKey(t => t.Id);
            });
        }
        protected void ConfigureDataBasereferences(ModelBuilder builder)
        {
            //Faculty 1 - N Departments
            builder.Entity<Faculty>().HasMany(t => t.Departments).WithOne(t => t.Faculty).ForeignKey(t => t.FacultyId).PrincipalKey(t => t.Id);

            //Faculty 1 - N Specialties
            builder.Entity<Faculty>().HasMany(t => t.Specialties).WithOne(t => t.Faculty).ForeignKey(t => t.FacultyId).PrincipalKey(t => t.Id);

            //Specialty 1 - N Groups
            builder.Entity<Specialty>().HasMany(t => t.Groups).WithOne(t => t.Specialty).ForeignKey(t => t.SpecialtyId).PrincipalKey(t => t.Id);

            //Department 1 - N Groups
            builder.Entity<Department>().HasMany(t => t.Groups).WithOne(t => t.Department).ForeignKey(t => t.SpecialtyId).PrincipalKey(t => t.Id);
        }
    }
}
