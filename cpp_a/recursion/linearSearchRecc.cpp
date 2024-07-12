// Linear search using recurssion 
#include <iostream>
using namespace std;

int linearSearch(int *arr, int s, int k)
{
    if (s == 0)
        return -1;
    if (*arr == k)
        return 1;

    else
        return linearSearch(arr + 1, s - 1, k);
}

int main()
{
    int arr[] = {9, 3, 4, 5, 6, 7, 1, 23, 15};
    int size = sizeof(arr) / sizeof(arr[0]);
    int key = 1;
    int ans = linearSearch(arr, size, key);
    if (ans >= 0)
    {
        cout << "element found at index" << endl;
    }
    else
        cout << "element not found " << endl;
}