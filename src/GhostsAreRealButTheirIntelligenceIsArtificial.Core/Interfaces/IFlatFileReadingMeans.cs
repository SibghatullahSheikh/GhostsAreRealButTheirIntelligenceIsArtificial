namespace GhostsAreRealButTheirIntelligenceIsArtificial.Core.Interfaces
{
    public interface IFlatFileReadingMeans
    {
        string GetVersion();
        string GetTextByPosition(string encoding);
    }
}
