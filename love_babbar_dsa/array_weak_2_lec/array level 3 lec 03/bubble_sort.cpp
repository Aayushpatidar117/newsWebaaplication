#include <iostream>
using namespace std;

int bublsort(int arr[], int n)
{

    for (int i = 0; i < n; i++)
    {

        for (int j = i + 1; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
                swap(arr[j], arr[j + 1]);
        }
    }
}

int main()
{
    int arr[] = {1, 50, 8, 110, 104, 15, 109, 203, 52, 80};
    int n = 10;
    cout << "Printing the array before sorting : " << endl;

    for (int i = 0; i < n; i++)
        cout << arr[i] << "  ";

    bublsort(arr, n);
    cout << endl
         << endl
         << endl;
    cout << " Printing the array after sorting : " << endl;

    for (int i = 0; i < n; i++)
        cout << arr[i] << "  ";
    cout << endl;
}