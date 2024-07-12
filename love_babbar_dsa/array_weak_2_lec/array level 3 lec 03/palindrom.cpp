#include <iostream>
using namespace std;

int pivotindex(int arr[], int n)
{
    int s = 0;
    int e = n - 1;
    int mid = s + (e - s) / 2;

    while (s < e)
    {
        if (arr[mid] > arr[mid + 1])
            return mid;

        else if (arr[mid] < arr[mid + 1])
            s = mid + 1;
        else
            e = mid;
        // cout << " s :" << s << " e :  " << e << " mid : " << mid << endl;
    }
}

int main()
{
    int arr[10];
    cout << "enter element of array : " << endl;
    for (int i = 0; i < 10; i++)
        cin >> arr[i];

    int peak = pivotindex(arr, 10);
    cout << " the peak element is : " << peak << endl;
}