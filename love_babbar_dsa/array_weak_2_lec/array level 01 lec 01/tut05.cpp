#include <iostream>
using namespace std;

int main()
{
    int arr[10] = {0, 0, 1, 0, 1, 0, 1, 0, 1, 0};
    int zerocount = 0, onecount = 0;

    for (int i = 0; i < 10; i++)
    {
        if (arr[i] == 0)
        {
            zerocount++;
        }
        else if (arr[i] == 1)
        {
            onecount++;
        }
    }
    cout << " zero count = " << zerocount << endl;
    cout << " one count  = " << onecount << endl;
}