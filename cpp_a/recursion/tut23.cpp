// ------> FIRST AND LAST POSITION OF NUMBER <------- //

#include <bits/stdc++.h>
using namespace std;

int first(int arr[], int low, int high, int x, int n)
{
    if (high >= low)
    {
        int mid = low + (high - low) / 2;
        if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
            return mid;
        else if (x > arr[mid])
            return first(arr, (mid + 1), high, x, n);
        else
            return first(arr, low, (mid - 1), x, n);
    }
    return -1;
}

int last(int arr[], int low, int high, int x, int n)
{
    if (high >= low)
    {
        int mid = low + (high - low) / 2;
        if ((mid == n - 1 || x < arr[mid + 1]) && arr[mid] == x)
            return mid;
        else if (x < arr[mid])
            return last(arr, low, (mid - 1), x, n);
        else
            return last(arr, (mid + 1), high, x, n);
    }
    return -1;
}

int main()
{
    int arr[] = {1, 2, 2, 2, 2, 3, 4, 7, 8, 8};
    int n = sizeof(arr) / sizeof(int);

    int x = 8;
    cout << " the first occurance of " << x << " is at index :-> " << first(arr, 0, n - 1, x, n) << endl;
    cout << " the last occurance of " << x << " is at index :-> " << last(arr, 0, n - 1, x, n) << endl;
    return 0;
}

/*
---------------------------------------------------------------------------
---------------------------------------------------------------------------
this is the example code for
---------------------------------------------------------------------------
searchin the occurance of first and last position of
---------------------------------------------------------------------------
an element in an sorted array by recurssion
---------------------------------------------------------------------------
---------------------------------------------------------------------------
*/
/*
#include <bits/stdc++.h>
using namespace std;

int first(int arr[], int s, int e, int k, int n)
{
    if (s >= e)
    {
        int mid = s + (e - s) / 2;
        if ((mid == 0 || k > arr[mid - 1]) && arr[mid] == k)
            return mid;

        else if (k > arr[mid])
            return first(arr, (mid + 1), e, k, n);

        else
            return first(arr, s, (mid - 1), k, n);
    }
}

int last(int arr[], int s, int e, int k, int n)
{
    if (s >= e)
    {
        int mid = s + (e - s) / 2;
        if ((mid == n - 1 || k < arr[mid + 1]) && arr[mid] == k)
            return mid;

        else if (k < arr[mid])
            return last(arr, s, (mid - 1), k, n);

        else
            return last(arr, (mid + 1), e, k, n);
    }
}

int main()
{
    int arr[] = {1, 2, 2, 2, 2, 3, 4, 7, 8, 8};
    int n = sizeof(arr) / sizeof(int);
    // int n = 13;
    int k = 8;

    cout << " The first occurance of " << k << " is presnent at index :-> " << first(arr, 0, (n - 1), k, n) << endl;
    cout << " The last occurance of " << k << " is present at index :-> " << last(arr, 0, (n - 1), k, n) << endl;
    return 0;
}
*/
