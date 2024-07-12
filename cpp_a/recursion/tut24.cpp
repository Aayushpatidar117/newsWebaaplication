// -------> REVERST THE STRING BY RECURSION     <-------- //

#include <iostream>
using namespace std;
void reverseStr(string &str, int i)
{
    // int n = str.length();
    // int m = str.length() - i - 1;
    // BASE CASE
    if (i > str.length() - i - 1) // USIN (n-i-1)  AT THE PLACE OF J TO SOLVE THE QUESTION BY ONLY ONE POINTER
        return;

    swap(str[i], str[str.length() - i - 1]);
    i++;
    // j--;          // USE TWO POINTER TO SOLVE THE QUESTION BY USING TWO POINTER
    // RECURSIVE CALL
    reverseStr(str, i);
}

int main()
{

    string str = "aayush";

    reverseStr(str, 0);
    cout << " The reverse string is :-> " << str << endl;
    return 0;
}