// ------> LINEAR SEARCH BY RECURSSION <------ //

#include <iostream>
using namespace std;
bool SearchInArray(int arr[], int s, int k)
{
    int i = 0;
    if (s == 0)
        return false;

    if (arr[i] == k)
        return true;
    else
    {
        SearchInArray(arr + 1, s - 1, k);
    }
}

int main()
{
    int arr[10] = {1, 5, 8, 7, 4, 22, 56, 89, 8, 90};
    int size = 10;
    int key = 90;
    int count = 0;

    bool ans = SearchInArray(arr, size, key);

    if (ans)
    {
        cout << " The key " << key << " present " << endl;
    }
    else
    {
        cout << " The key " << key << " is not present " << endl;
    }
}