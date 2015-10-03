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
        //public DbSet<Project> Projects { get; set; }
        //public DbSet<ProjectType> ProjectTypes { get; set; }
        //public DbSet<ProjectVersion> ProjectVersions { get; set; }
        //public DbSet<Report> Reports { get; set; }
        //public DbSet<ReportGroup> ReportGroup { get; set; }
        /*private static bool _created;*/
        /*public ReporterAppContext()
        {
            // Create the database and schema if it doesn't exist
            if (!_created)
            {
                Database.AsRelational().ApplyMigrations();
                _created = true;
            }
        }*/


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
                user.Property(t => t.JoinDate).Required(true);
            });
            builder.Entity<Role>().ToTable("Roles");
            builder.Entity<IdentityRoleClaim<Int64>>().ToTable("RoleClaims");
            builder.Entity<IdentityUserRole<Int64>>().ToTable("UserRoles");
            builder.Entity<IdentityUserLogin<Int64>>().ToTable("UserLogins");
            builder.Entity<IdentityUserClaim<Int64>>().ToTable("UserClaims");

            //builder.Entity<Project>(project =>
            //{
            //    project.ToTable("Projects");
            //    project.Key(t => t.Id);
            //    project.Property(t => t.LatestVersionId).Required(false);
            //    project.Property(t => t.Name).MaxLength(30);
            //    project.Property(t => t.CreateDate).HasDefaultValueSql("GETDATE()");
            //    project.Index(t => new { t.UserId, t.Name }).Name("Name_UserId_Uniq").Unique(true);
            //});

            //builder.Entity<ProjectVersion>(projectVersion =>
            //{
            //    projectVersion.ToTable("ProjectVersions");
            //    projectVersion.Key(t => t.Id);
            //});

            //builder.Entity<ProjectType>(projectVersion =>
            //{
            //    projectVersion.ToTable("ProjectTypes");
            //    projectVersion.Key(t => t.Id);
            //    projectVersion.Property(t => t.Name).MaxLength(30);
            //    projectVersion.Index(t => t.Name).Name("Name_Uniq").Unique(true);
            //});

            //builder.Entity<Report>(report =>
            //{
            //    //report.Ignore(report => report)
            //    report.ToTable("Reports");
            //    report.Key(t => t.Id);
            //});

            //builder.Entity<ReportGroup>(reportGroup =>
            //{
            //    reportGroup.ToTable("ReportGroups");
            //    reportGroup.Key(t => t.Id);
            //});
        }
        protected void ConfigureDataBasereferences(ModelBuilder builder)
        {
            //User 1 - N Project
            //builder.Entity<User>().Collection(t => t.Projects).InverseReference(t => t.User).ForeignKey(t => t.UserId).PrincipalKey(t => t.Id);

            ////Project 1 - N ProjectVersion
            //builder.Entity<Project>().Collection(t => t.ProjectVersions).InverseReference(t => t.Project).ForeignKey(t => t.ProjectId).PrincipalKey(t => t.Id);

            ////Project 1 - 1 ProjectType
            //builder.Entity<Project>().Reference(t => t.ProjectType).InverseCollection(t => t.Projects).ForeignKey(t => t.ProjectTypeId).PrincipalKey(t => t.Id);
        }
    }
}
