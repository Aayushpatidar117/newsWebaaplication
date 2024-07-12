// -----> ROW WISE & COLUMN WISE SUM <----- //

#include <iostream>
using namespace std;

int rowWisesum(int arr[][4], int nrow, int ncol)
{

    for (int row = 0; row < nrow; row++)
    {
        int sum = 0;
        for (int col = 0; col < ncol; col++)
        {
            sum += arr[row][col];
        }
        cout << sum << endl;
    }
    cout << endl;
}

int colWisesum(int arr[][4], int nrow, int ncol)
{

    for (int col = 0; col < ncol; col++)
    {
        int sum = 0;
        for (int row = 0; row < nrow; row++)
        {
            sum += arr[row][col];
        }
        cout << sum << " ";
    }
}

int main()
{
    // int nRow = 5;
    // int nCol = 4;

    int arr[5][4];
    cout << "Enter the elements ->" << endl;

    // ARRAY IN INPUT//
    for (int row = 0; row < 5; row++)
    {
        for (int col = 0; col < 4; col++)
        {
            cin >> arr[row][col];
        }
    }

    rowWisesum(arr, 5, 4);
    colWisesum(arr, 5, 4);

    return 0;
}