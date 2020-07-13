namespace Analysis
{
    public class RotatingAnArrayByKPosition
    {
        public static void RotateArray(int[] a, int n, int k)
        {
            ReverseArray(a, 0, k - 1);
            ReverseArray(a, k, n - 1);
            ReverseArray(a, 0, n - 1);
        }

        private static void ReverseArray(int[] arr, int start, int end)
        {
            for (int i = start, j = end; i < j; i++, j--)
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
