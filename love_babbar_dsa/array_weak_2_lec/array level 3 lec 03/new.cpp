// #include <iostream>
// using namespace std;

// int main()
// {
//     int n, sum = 0;
//     cin >> n;
//     int input[n];
//     for (int i = 0; i < n; i++)
//     {
//         cin >> input[i];
//     }
//     for (int i = 0; i < n; i++)
//     {
//         sum = sum + input[i];
//     }
//     cout << sum << endl;
//     return 0;
// }

#include <iostream>
using namespace std;

void linearSearch(int arr[], int n, int val)
{
    int flag = 0;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == val)
        {
            flag = 1;
        }
    }
    if (flag)
        cout << "target found " << endl;

    else
        cout << " target not found " << endl;
}
int main()
{
    int n, tar;
    cout << "enter the size :-> " << endl;
    cin >> n;
    cout << "enter target :-> " << endl;
    cin >> tar;
    cout << "enter elements :-> " << endl;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    linearSearch(arr, n, tar);
}