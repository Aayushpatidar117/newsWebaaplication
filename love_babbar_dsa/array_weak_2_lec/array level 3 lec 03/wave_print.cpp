// Wave print of 2d
#include <iostream>
#include <vector>
using namespace std;

int wavePrintrow(vector<vector<int>> &arr)
{
    int noRow = arr.size();
    int noCol = arr[0].size();

    for (int col = 0; col < noRow; col++)
    {

        if ((col & 1) == 0)
        {
            for (int row = 0; row < noCol; row++)
                cout << arr[col][row] << "  ";
        }
        else
        {
            for (int row = noCol - 1; row >= 0; row--)
            {
                cout << arr[col][row] << "  ";
            }
        }
        cout << endl;
    }
    cout << endl
         << endl;
}

int wavePrintcol(vector<vector<int>> arr)
{
    int noRow = arr.size();
    int noCol = arr[0].size();

    for (int col = 0; col < noCol; col++)
    {

        if ((col & 1) == 0)
        {
            for (int row = 0; row < noRow; row++)
            {
                cout << arr[row][col] << " ";
            }
        }
        else
        {
            for (int row = (noRow - 1); row >= 0; row--)
            {
                cout << arr[row][col] << " ";
            }
        }
        cout << endl;
    }
    cout << endl
         << endl;
}

int main()
{
    vector<vector<int>> arr{
        {1, 21, 3, 5, 15, 17, 20, 80, 90, 85},
        {2, 4, 6, 7, 16, 12, 13, 21, 51, 41},
        {8, 9, 10, 11, 25, 28, 27, 30, 33, 62},
        {78, 50, 55, 35, 43, 24, 87, 74, 76, 88}};

    wavePrintrow(arr);
    wavePrintcol(arr);
}