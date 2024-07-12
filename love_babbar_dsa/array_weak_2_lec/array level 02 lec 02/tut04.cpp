// SORT ZERO AND ONE

#include <iostream>
using namespace std;

// int shortZeroOne(int arr[], int size)
// {

//     int start = 0, end = size - 1;
//     while (start < end)
//     {
//         if (arr[start] == 1)
//         {
//             swap(arr[start++], arr[end--]);
//         }
//     }

//     for (int i = 0; i < size; i++)
//     {
//         cout << arr[i] << "  ";
//     }
// }

int main()
{

    int arr[10] = {0, 0, 0, 1, 0, 1, 0, 1, 0, 1};

    // shortZeroOne(arr, 10);
    int size = 10;
    int s = 0, e = size - 1;

    while (s < e)
    {
        if (arr[s] == 0)
        {
            s++;
        }
        else if (arr[e] == 1)
        {
            e--;
        }

        else
        {
            swap(arr[s++], arr[e--]);
        }
    }

    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << "  ";
    }
}