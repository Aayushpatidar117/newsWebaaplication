#include <iostream>
using namespace std;

int main()
{
    int arr[10];

    for (int i = 0; i < 10; i++)
    {
        cout << " Enter the value at index " << i << ":";
        cin >> arr[i];
    }

    cout << "Printing the double value of an array : " << endl;

    for (int i = 0; i < 10; i++)
    {
        cout << 2 * (arr[i]) << "  ";
    }
}