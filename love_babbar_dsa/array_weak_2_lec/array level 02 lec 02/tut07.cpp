
// ROTATE ARRAY LEFT

#include <iostream>
using namespace std;

int print_array(int arr[], int s)
{

    for (int i = 0; i < s; i++)
    {
        cout << arr[i] << "  ";
    }
}

int rotate_array(int arr[], int s)
{

    int temp = arr[0];

    for (int i = 0; i < s; i++)
    {
        arr[i] = arr[i + 1];
    }
    arr[s - 1] = temp;

    print_array(arr, s);
}

int main()
{
    int arr[10];
    int s = 10;

    cout << "Enter the value of an array : " << endl;

    for (int i = 0; i < s; i++)
    {
        cin >> arr[i];
    }

    rotate_array(arr, s);
}