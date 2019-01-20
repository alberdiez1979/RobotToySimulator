using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RobotToySimulator.Startup))]
namespace RobotToySimulator
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
