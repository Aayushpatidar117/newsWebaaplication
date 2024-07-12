// binary search using recurssion 
#include <iostream>
using namespace std;

int binarySearch(int *arr, int start, int end, int k)
{
    int mid = start + (end - start) / 2;
    if (start > end)
        return -1;
    if (arr[mid] == k)
    {
        return mid;
    }
    if (arr[mid] > k)
        return binarySearch(arr, start, mid - 1, k);

    else
        return binarySearch(arr, mid + 1, end, k);
}

int main()
{
    // int arr[] = {1, 5, 7, 8, 10, 15, 16, 20, 50};
    int arr[] = {1, 2, 3, 4, 5};
    int s = sizeof(arr) / sizeof(arr[0]);
    int key = 10;

    int ans = binarySearch(arr, 0, s - 1, key);
    if (ans >= 0)
    {
        cout << "element is found at index " << ans << endl;
    }
    else
        cout << "not found " << endl;
}