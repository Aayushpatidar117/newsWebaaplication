#include <iostream>
using namespace std;

void printarray(int arr[10], int s)
{
    for (int i = 0; i < 10; i++)
    {
        cout << arr[i] << "  ";
    }
}

int inputarray(int arr[], int size)
{

    cout
        << "enter the value " << endl;
    for (int i = 0; i < 10; i++)
    {
        cin >> arr[i];
    }
}

int main()
{
    int arr[10];
    inputarray(arr, 10);
    printarray(arr, 10);
}