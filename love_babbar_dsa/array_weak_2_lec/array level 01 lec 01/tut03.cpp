#include <iostream>
using namespace std;

int main()
{
    int arr[10] = {1, 2, 3, 4, 5, 6, 4, 5, 6, 1};
    int k = 10;
    bool flag = 0;
    for (int i = 0; i < 10; i++)
    {
        if (arr[i] == k)
        {
            flag = 1;
            break;
        }
    }
    if (flag)
    {
        cout << "found " << endl;
    }
    else
    {
        cout << " not found" << endl;
    }
}