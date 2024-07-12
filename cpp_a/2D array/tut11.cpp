//   -----> INPUTE OUTPUT IN 2D ARRAY <----- //

#include <iostream>
using namespace std;

int main()
{
    int arr[3][4];
    cout << "Enter the elements -> " << endl;

    // Taking input 2D array //

    for (int row = 0; row < 3; row++)
    {
        for (int col = 0; col < 4; col++)
        {
            cin >> arr[row][col];
        }
    }

    cout << "The elements you entered is -> " << endl;
    // Output in 2D array //

    for (int col = 0; col < 4; col++)
    {
        for (int row = 0; row < 3; row++)
        {
            cout << arr[row][col] << " ";
        }
        cout << endl;
    }
    return 0;
}