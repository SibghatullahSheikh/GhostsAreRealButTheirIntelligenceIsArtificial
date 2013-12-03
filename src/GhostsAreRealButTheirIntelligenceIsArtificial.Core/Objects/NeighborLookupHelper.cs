namespace GhostsAreRealButTheirIntelligenceIsArtificial.Core.Objects
{
    public class NeighborLookupHelper
    {
        public string Down { get; set; }
        public string Left { get; set; }
        public string Right { get; set; }
        public string Up { get; set; }

        public NeighborLookupHelper(string down, string left, string right, string up)
        {
            Down = down;
            Left = left;
            Right = right;
            Up = up;
        }
    }
}
