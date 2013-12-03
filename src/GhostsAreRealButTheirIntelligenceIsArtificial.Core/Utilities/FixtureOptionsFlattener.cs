using System;
using System.Linq;
using GhostsAreRealButTheirIntelligenceIsArtificial.Core.Objects;
namespace GhostsAreRealButTheirIntelligenceIsArtificial.Core.Utilities
{
    public class FixtureOptionsFlattener
    {
        public static string Render()
        {
            var values = Enum.GetValues(typeof(Fixture));
            string spool = values.Cast<object>().Aggregate("", (current, value) => current + value + " ");
            return spool.Trim();
        }
    }
}
