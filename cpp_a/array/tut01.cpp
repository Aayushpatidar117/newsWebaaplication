//  <<<< SELECTION SORT >>>>

#include <iostream>
using namespace std;

int PrintArray(int arr[], int n)
{

    for (int i = 0; i < n; i++)
    {

        cout << " " << arr[i] << " ";
    }
}

void SortArray(int arr[], int n)
{

    for (int i = 0; i < n - 1; i++)
    {
        int minIndex = i;

        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]);
    }
}

int main()
{
    int arr[7] = {(1), (3), (8), 3};
    int size = 7;
    SortArray(arr, size);
    PrintArray(arr, size);
    return 0;
}
