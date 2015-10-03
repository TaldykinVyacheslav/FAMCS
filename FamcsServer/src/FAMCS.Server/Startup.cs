using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Diagnostics;
using Microsoft.AspNet.Diagnostics.Entity;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Routing;
using Microsoft.Data.Entity;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using FAMCS.Server.Models;
using Microsoft.Dnx.Runtime;

namespace FAMCS.Server
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IHostingEnvironment hostEnv, IApplicationEnvironment appEnv)
        {
            var configurationBuilder = new ConfigurationBuilder(appEnv.ApplicationBasePath)
                .AddJsonFile("config.json")
                .AddJsonFile($"config.{hostEnv.EnvironmentName}.json", optional: true);

            if (hostEnv.IsEnvironment("Development"))
            {
                configurationBuilder.AddUserSecrets();
            }
            configurationBuilder.AddEnvironmentVariables();
            Configuration = configurationBuilder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFramework()
            .AddSqlServer()
            .AddDbContext<FamcsContext>((options) =>
            {
                options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]);
            });
            //services.AddScoped<IStore<Project>, ProjectStore>();
            //services.AddScoped<IStore<Report>, BaseStore<Report>>();
            //services.AddScoped<IStore<ReportGroup>, BaseStore<ReportGroup>>();
            //services.AddScoped<IStore<ProjectVersion>, BaseStore<ProjectVersion>>();
            services.AddIdentity<User, Role>
            (options => { })
            .AddEntityFrameworkStores<FamcsContext, long>()
                        .AddUserStore<UserStore<User,Role,FamcsContext,long>>()
                        //.AddRoleStore<RoleStore>()
                        .AddUserManager<UserManager<User>>()
                        //.AddRoleManager<RoleManager>()
                        .AddDefaultTokenProviders();
            
            services.ConfigureIdentity(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonLetterOrDigit = false;
                options.Password.RequireUppercase = false;
            });

            //services.AddScoped<IUserManager, UserManager>();
            //services.AddScoped<ISignInManager, SignInManager>();
            //services.AddScoped<IProjectManager, ProjectManager>();
            //services.AddScoped<IReportManager, ReportManager>();
            //services.AddSingleton<ProjectManager>();
            //services.AddSingleton<ProjectTypeManager>();

            services.AddMvc(options => { });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseStaticFiles();
            app.UseIdentity();
            app.UseMvc(routes =>
            {
                routes
                .MapRoute(
                    name: "default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Users", action = "Get2" });
                // Uncomment the following line to add a route for porting Web API 2 controllers.
                // routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
            });
            //DataBaseInit(app);

        }
    }
}
