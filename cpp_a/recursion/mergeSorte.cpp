#include <iostream>
using namespace std;

void merge(int *arr, int s, int e)
{
    int mid = s + (e - s) / 2;

    int len1 = mid - s + 1;
    int len2 = e - mid;

    int *arr1 = new int[len1];
    int *arr2 = new int[len2];

    int mainIndex = s;
    for (int i = 0; i < len1; i++)
    {
        arr1[i] = arr[mainIndex++];
    }

    mainIndex = mid + 1;
    for (int i = 0; i < len2; i++)
    {
        arr2[i] = arr[mainIndex++];
    }
    int Index1 = 0;
    int Index2 = 0;
    mainIndex = s;

    while (Index1 < len1 && Index2 < len2)
    {
        if (arr1[Index1] < arr2[Index2])
            arr[mainIndex++] = arr1[Index1++];
        else
            arr[mainIndex++] = arr2[Index2++];
    }

    while (Index1 < len1)
        arr[mainIndex++] = arr1[Index1++];

    while (Index2 < len2)
        arr[mainIndex++] = arr2[Index2++];

    delete[] arr1;
    delete[] arr2;
}

void mergeSort(int *arr, int st, int end)
{

    if (st >= end)
        return;

    int mid = st + (end - st) / 2;

    mergeSort(arr, st, mid);

    mergeSort(arr, mid + 1, end);

    merge(arr, st, end);
}

int main()
{
    int arr[] = {5, 2, 1, 8, 4, 25, 27};
    int size = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, size - 1);

    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << "  ";
    }
    cout << endl;
}