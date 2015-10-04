using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Framework.OptionsModel;

namespace FAMCS.Server.Models
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
                user.Key(t => t.Id);
            });
            builder.Entity<Role>().ToTable("Roles");
            builder.Entity<IdentityRoleClaim<Int64>>().ToTable("RoleClaims");
            builder.Entity<IdentityUserRole<Int64>>().ToTable("UserRoles");
            builder.Entity<IdentityUserLogin<Int64>>().ToTable("UserLogins");
            builder.Entity<IdentityUserClaim<Int64>>().ToTable("UserClaims");

            builder.Entity<Faculty>(faculty => 
            {

            });

            builder.Entity<Department>(departament =>
            {

            });

            builder.Entity<Specialty>(specialty =>
            {

            });

            builder.Entity<Group>(group =>
            {

            });
        }
        protected void ConfigureDataBasereferences(ModelBuilder builder)
        {
            //Faculty 1 - N Departments
            builder.Entity<Faculty>().Collection(t => t.Departments).InverseReference(t => t.Faculty).ForeignKey(t => t.FacultyId).PrincipalKey(t => t.Id);

            //Faculty 1 - N Specialties
            builder.Entity<Faculty>().Collection(t => t.Specialties).InverseReference(t => t.Faculty).ForeignKey(t => t.FacultyId).PrincipalKey(t => t.Id);

            //Specialty 1 - N Groups
            builder.Entity<Specialty>().Collection(t => t.Groups).InverseReference(t => t.Specialty).ForeignKey(t => t.SpecialtyId).PrincipalKey(t => t.Id);

            //Department 1 - N Groups
            builder.Entity<Department>().Collection(t => t.Groups).InverseReference(t => t.Department).ForeignKey(t => t.SpecialtyId).PrincipalKey(t => t.Id);
            
            //Department 1 - 1 User
            builder.Entity<Department>().Collection(t => t.Professors).InverseReference(t => t.Department).ForeignKey(t => t.DepartamentId).PrincipalKey(t => t.Id);
        }
    }
}
