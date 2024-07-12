// ------->  CHECK IF THE STRING IS PALINDROME OR NOT  <------- //

#include <iostream>
using namespace std;

bool checkPalindorme(string str, int i /*, int j*/)
{
    // cout << j << endl;
    cout << i << endl;
    cout << " the string call is " << str << endl;
    // BASE CASE
    if (i > str.length() - i - 1 /* j*/)
        return true;

    if (str[i] != str[str.length() - i - 1] /* str[j]*/)
        return false;
    else
        return checkPalindorme(str, i + 1 /*, (str.length()-i-1) j - 1*/);
}

int main()
{
    string str = "absqqsba";

    bool isPalindrome = checkPalindorme(str, 0 /*, str.length() - 1*/);

    if (isPalindrome)
        cout << "The string is palindorme " << endl;

    else
        cout << "The string is not a palindorme " << endl;
    return 0;
}