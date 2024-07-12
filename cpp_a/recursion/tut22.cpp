// -------> BINARY SEARCH BY RECURCION <------ //

#include <iostream>
using namespace std;

void print(int arr[], int s, int e)
{

    for (int i = s; i <= e; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

bool binarySearch(int *arr, int s, int e, int k)
{

    if (s > e)
    {
        return false;
    }

    int mid = s + (e - s) / 2;

    if (mid == k)
        return true;

    if (mid > k)
        binarySearch(arr, s, mid - 1, k);

    if (mid < k)
        binarySearch(arr, mid + 1, e, k);
}

int main()
{
    int arr[8] = {1, 2, 3, 4, 5, 6, 7, 8};
    int size = 8;
    int key = 7;

    int s = 0;
    int e = size - 1;

    int ans = binarySearch(arr, s, e, key);
    if (ans)
        cout << " the key is found " << endl;

    else
        cout << " the key is not found " << endl;
}