#include <iostream>
#include <vector>
using namespace std;

int calc_Sum(int a[], int n, int b[], int m)
{

    int i = n - 1, j = m - 1;
    int ans = 0;
    int sum = 0, carry = 0;
    vector<int> ans2;
    while (i >= 0 && j >= 0)
    {
        sum = a[i--] + b[j--] + carry;
        ans = sum % 10;
        carry = sum / 10;
        ans2.push_back(ans);
    }

    while (i >= 0)
    {

        sum = a[i--] + carry;
        ans = sum % 10;
        carry = sum / 10;
        ans2.push_back(ans);
    }

    while (j >= 0)
    {

        sum = b[j--] + carry;
        ans = sum % 10;
        carry = sum / 10;
        ans2.push_back(ans);
    }
    return ans;
}

int main()
{
    int a[] = {1, 2, 3, 5};
    int n = 4;
    int b[] = {5, 8, 3, 6, 4};
    int m = 5;

    cout << "sum :-> " << calc_Sum(a, n, b, m) << endl;
}