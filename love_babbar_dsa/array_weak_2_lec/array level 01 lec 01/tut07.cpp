#include <iostream>
using namespace std;

int reverse_array(int arr[], int size)
{

    int s = 0;
    int e = (size - 1);
    // for (int i = 0; i < size; i++)
    while (s <= e)
    {
        swap(arr[s++], arr[e--]);
    }

    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << "  ";
    }
    cout << endl;
}

int main()
{
    int arr[10] = {1, 2, 4, 3, 5, 6, 7, 8, 9, 10};

    reverse_array(arr, 10);
    return 0;
}