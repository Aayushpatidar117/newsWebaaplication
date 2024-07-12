#include <iostream>
using namespace std;

void insersionSort(int arr[], int n)
{
    int temp;
    for (int i = 1; i < n; i++)
    {
        int j = i - 1;
        temp = arr[i];
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
    }
}

void bubbleSort(int arr[], int n)
{
    int flag;
    for (int i = 0; i < n; i++)
    {
        flag = false;
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
                flag = true;
            }
        }

        if (flag == false)
            break;
    }
}

void selectionSort(int arr[], int n)
{
    int minIndex = 0;

    for (int i = 0; i < n; i++)
    {
        minIndex = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[minIndex] > arr[j])
                minIndex = j;
        }
        swap(arr[minIndex], arr[i]);
    }
}

void printarr(int arr[], int *n)
{
    for (int i = 0; i < *n; i++)
        cout << arr[i] << " ";
}

int main()
{
    int arr[10] = {10, 9, 8, 1, 2, 3, 7, 6, 5, 4};
    int n = 10;

    cout << "Printing before sorting :-> " << endl;
    printarr(arr, &n);

    // selectionSort(arr, n);
    // bubbleSort(arr, n);
    insersionSort(arr, n);
    cout << endl
        << "Printing after sorting :-> " << endl;
    printarr(arr, &n);
}