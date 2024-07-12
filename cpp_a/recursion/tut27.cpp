// -------->  MERGE SORT BY RECURSION  <---------- //

/*
#include <iostream>
using namespace std;

void mergeTwosorted_array(int *arr, int s, int e)
{
    int mid = s + (e - s) / 2;

    int lenth1 = mid - s + 1;
    int lenth2 = e - mid;

    int *arr1 = new int[lenth1];
    int *arr2 = new int[lenth2];

    // COPY VALUES

    int k = s;
    for (int i = 0; i < lenth1; i++)
    {
        arr1[i] = arr[k++];
    }

    k = mid + 1;
    for (int i = 0; i < lenth2; i++)
    {
        arr2[i] = arr[k++];
    }

    // MERGE TWO AORTED ARRAY

    int index1 = 0;
    int index2 = 0;
    k = s;
    while (index1 < lenth1 && index2 < lenth2)
    {
        if (arr1[index1] < arr2[index2])
        {
            arr[k++] = arr1[index1++];
        }
        else
        {
            arr[k++] = arr2[index2++];
        }
    }

    while (index1 < lenth1)
    {
        arr[k++] = arr1[index1++];
    }
    while (index2 < lenth2)
    {
        arr[k++] = arr2[index2++];
    }
    delete[] arr1;
    delete[] arr2;
}

void mergesort(int *arr, int s, int e)
{
    // BASE CASE

    if (s >= e)
    {
        return;
    }
    int mid = s + (e - s) / 2;

    // RECURSIVE CALL FOR LEFT PART
    mergesort(arr, s, mid);

    // RECURSIVE CALL FOR RIGHT PART
    mergesort(arr, mid + 1, e);

    // MERGE TWO SORTED ARRAY
    mergeTwosorted_array(arr, s, e);
}

int mian()
{
    int arr[13] = {2, 8, 9, 45, 7, 3, 5, 4, 9, 6, 7, 5, 3};
    int n = 13;

    mergesort(arr, 0, n - 1);

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}
*/

#include <iostream>
using namespace std;

void merge(int *arr, int s, int e)
{

    int mid = s + (e - s) / 2;

    int len1 = mid - s + 1;
    int len2 = e - mid;

    int *first = new int[len1];
    int *second = new int[len2];

    // copy values
    int mainArrayIndex = s;
    for (int i = 0; i < len1; i++)
    {
        first[i] = arr[mainArrayIndex++];
    }

    mainArrayIndex = mid + 1;
    for (int i = 0; i < len2; i++)
    {
        second[i] = arr[mainArrayIndex++];
    }

    // merge 2 sorted arrays
    int index1 = 0;
    int index2 = 0;
    mainArrayIndex = s;

    while (index1 < len1 && index2 < len2)
    {
        if (first[index1] < second[index2])
        {
            arr[mainArrayIndex++] = first[index1++];
        }
        else
        {
            arr[mainArrayIndex++] = second[index2++];
        }
    }

    while (index1 < len1)
    {
        arr[mainArrayIndex++] = first[index1++];
    }

    while (index2 < len2)
    {
        arr[mainArrayIndex++] = second[index2++];
    }

    delete[] first;
    delete[] second;
}

void mergeSort(int *arr, int s, int e)
{

    // base case
    if (s >= e)
    {
        return;
    }

    int mid = s + (e - s) / 2;

    // left part sort karna h
    mergeSort(arr, s, mid);

    // right part sort karna h
    mergeSort(arr, mid + 1, e);

    // merge
    merge(arr, s, e);
}

int main()
{

    int arr[15] = {3, 7, 0, 1, 5, 8, 3, 2, 34, 66, 87, 23, 12, 12, 12};
    int n = 15;

    mergeSort(arr, 0, n - 1);

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
