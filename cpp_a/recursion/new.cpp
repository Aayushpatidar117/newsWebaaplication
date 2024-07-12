#include <iostream>
using namespace std;

void BinarySearch(int arr[], int n, int s, int e, int key)
{

    int mid = s + (e - s) / 2;

    while (s < e)
    {
        if (arr[mid] == key)
        {
            cout << "key found at index " << mid << endl;
        }
        if (arr[mid] < key)
        {
            s = mid + 1;
        }
        else
        {
            e = mid - 1;
        }
        mid = s + (e - s) / 2;
    }

    // mid =  s+ (e-s)/2;
}

int main()
{
    int arr[] = {2, 5, 8, 9, 10, 15};
    int n = 6;
    int s = 0;
    int e = n - 1;
    int key = 10;
    BinarySearch(arr, 6, s, e, key);
}
