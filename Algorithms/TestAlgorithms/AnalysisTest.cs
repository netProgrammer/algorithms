using Analysis;
using Xunit;

namespace TestAlgorithms
{
    public class AnalysisTest
    {
        [Fact]
        public void TestRotatingAnArrayByKPosition()
        {
            int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
            RotatingAnArrayByKPosition.RotateArray(arr, arr.Length - 2, 4);
            Assert.Equal(new int[]{5,6,7,8,1,2,3,4,9,10}, arr);
        }
    }
}
