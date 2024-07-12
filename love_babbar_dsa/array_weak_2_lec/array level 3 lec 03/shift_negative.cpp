#include <iostream>
using namespace std;

int shift_arr(int arr[], int s)
{

    int i = 0;
    int j = 0;

    while (j < s)
    {
        if (arr[j] < 0)
        {
            swap(arr[i++], arr[j++]);
        }
        else
        {
            j++;
        }
    }
}

int printarr(int arr[], int s)
{
    for (int i = 0; i < s; i++)
    {
        cout << arr[i] << "  ";
    }
    cout << endl;
}

int main()
{
    int arr[10] = {1, -2, 3, -5, 4, -8, -9, -7, 5, -6};
    cout << "Printing befor shifting : " << endl;
    printarr(arr, 10);
    cout << endl;
    shift_arr(arr, 10);
    cout << " Printing after shifting : " << endl;
    printarr(arr, 10);
}