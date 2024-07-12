//  <<<<< BUBBLE SORT >>>>>

#include <iostream>
#include <algorithm>
using namespace std;

int PrintArray(int arr[], int n)
{

    for (int i = 0; i < n; i++)
    {

        cout << " " << arr[i] << " ";
    }
}

int BubbleSort(int arr[], int n)
{
    for (int i = 1; i < n; i++)
    {
        bool swaped = false;

        for (int j = 0; j < n - i; j++)
        {

            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
                swaped = true;
            }
        }
        if (swaped == false)
        {
            break;
        }
    }
}

int main()
{
    int arr[8] = {12, 10, 9, 8, 7, 5, 4, 1};
    int size = 8;

    BubbleSort(arr, size);
    PrintArray(arr, size);

    return 0;
}