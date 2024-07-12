// ----> LARGEST ROW AND COLUMN SUM <----- //

#include <iostream>
using namespace std;

int largestCol_Sum(int arr[][4], int n, int m)
{
    int maxi = INT32_MIN;
    for (int col = 0; col < m; col++)
    {
        int sum = 0;
        for (int row = 0; row < n; row++)
        {
            sum += arr[row][col];
        }
        if (maxi < sum)
        {
            maxi = sum;
        }
    }
    cout << "The Largest Column Sum is -> " << maxi << endl;
}

int largestRow_Sum(int arr[][4], int n, int m)
{
    int maxi = INT32_MIN;
    for (int row = 0; row < n; row++)
    {
        int sum = 0;
        for (int col = 0; col < m; col++)
        {
            sum += arr[row][col];
        }
        if (maxi < sum)
        {
            maxi = sum;
        }
    }
    cout << "The Largest Row Sum is -> " << maxi << endl;
}

int main()
{
    int arr[3][4];
    cout << "Enter the elements ->" << endl;

    for (int row = 0; row < 3; row++)
    {
        for (int col = 0; col < 4; col++)
        {
            cin >> arr[row][col];
        }
    }

    largestRow_Sum(arr, 3, 4);
    largestCol_Sum(arr, 3, 4);
    return 0;
}