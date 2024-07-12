#include <iostream>
#include <limits.h>
using namespace std;

int find_mini(int arr[], int size)
{

    int mini = INT_MAX;

    for (int i = 0; i < size; i++)
    {

        if (arr[i] <= mini)
        {
            mini = arr[i];
        }
    }

    return mini;
}

int main()
{

    int arr[10] = {111, 2, 3, 4, 5, 6, 7, 8, 9, 0};

    cout << "the minimum value of array is : " << find_mini(arr, 10) << endl;

    return 0;
}