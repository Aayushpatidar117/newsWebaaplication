//  <<<< INSERTION SORT >>>>

#include <iostream>
using namespace std;

int PrintArray(int arr[], int n)
{

    for (int i = 0; i < n; i++)
    {

        cout << " " << arr[i] << " ";
    }
    return 0;
}

void InsertionSort(int arr[], int n)
{
    int i = 1;
    // for (int i = 1; i < n; i++)
    while (i < n)
    {
        int temp = arr[i];
        int j = i - 1;
        while (j >= 0)
        {
            if (arr[j] > temp)
            {
                arr[j + 1] = arr[j];
            }
            else
            {
                break;
            }
            j--;
        }
        arr[j + 1] = temp;
        i++;
    }
}

int main()
{
    int arr[8] = {12, 2, 8, 3, 1, 5, 8, 9};
    int size = 8;
    InsertionSort(arr, size);
    PrintArray(arr, size);
    return 0;
}