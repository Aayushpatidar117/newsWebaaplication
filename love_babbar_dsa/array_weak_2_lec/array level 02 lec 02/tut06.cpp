
// ROTETE ARRAY RIGHT

#include <iostream>
using namespace std;

int main()
{
    int arr[10] = {10, 12, 14, 16, 18, 20, 22, 24, 26, 28};
    int n = 10;
    int temp = arr[n - 1];

    for (int i = (n - 1); i >= 1; i--)
    {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}