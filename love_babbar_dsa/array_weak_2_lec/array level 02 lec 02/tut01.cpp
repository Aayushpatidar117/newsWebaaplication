// FIND UNIQUE ELEMENT IN AN ARRAY

#include <iostream>
using namespace std;

int find_unique(int arr[], int size)
{

    int ans = 0;
    for (int i = 0; i < size; i++)
    {
        ans = ans ^ arr[i];
    }
    return ans;
}

int main()
{
    int arr[11];
    for (int i = 0; i < 11; i++)
    {
        cin >> arr[i];
    }

    int final_ans = find_unique(arr, 11);
    cout << " Unique number is : " << final_ans << endl;
}