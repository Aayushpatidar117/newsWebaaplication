// -----> SAY DIGIT BY RECURSSION WHEN YOU HAVE GIVEN AN INTEGER VALUE <----- //

#include <iostream>
using namespace std;

void saydigit(int n, string arr[])
{
    // cout << " the value of n is " << n << endl;
    // base case
    if (n == 0)
        return;

    int digit = n % 10;
    n = n / 10;
    saydigit(n, arr);
    cout << arr[digit] << " ";
}

int main()
{
    int n;
    cin >> n;
    string arr[10] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

    saydigit(n, arr);
    return 0;
}