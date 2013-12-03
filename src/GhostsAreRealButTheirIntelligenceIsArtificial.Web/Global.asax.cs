using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Interfaces;
using GhostsAreRealButTheirIntelligenceIsArtificial.Means;
using StructureMap;
namespace GhostsAreRealButTheirIntelligenceIsArtificial.Web
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            ObjectFactory.Initialize(act =>
            {
                act.ForRequestedType<IJsonTranslationsMeans>
                      ().TheDefaultIsConcreteType<JsonTranslationsMeans>();
            });
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
