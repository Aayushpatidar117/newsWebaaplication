// -------> CHECK IF THE ARRAY IS SORTED OR NOT BY RECURSSION <------ //

#include <iostream>
using namespace std;

bool sortArray(int arr[], int s)
{
    int i = 0;

    if (s == 0 || s == 1) // BASE CASE
        return true;

    if (arr[i] > arr[i + 1]) // IF THE 0TH ELEMENT IS GRATER THEN THE 1TH ELEMENT RETURN FALSE MEANS ARRAY IS NOT SORTED
        return false;
    else
    {
        bool rpart = sortArray(arr + 1, s - 1); // IF THE ABOVE CONDITION IS NOT TRUE CALL TO THE SORT FUNCTION
        return rpart;
    }
}

int main()
{

    int arr[5] = {1, 2, 9, 4, 5}; // INICILISE ARRAY
    int s = 5;                    // SIZE OF ARRAY
    bool ans = sortArray(arr, s); // FUNCTION CALLL FORM MAIN FUNCTION

    if (ans) // THE SORTAD FUNCTION RETURNS BOOL VALUE
    {
        cout << " the given array is sorted " << endl;
    }
    else
    {
        cout << " the array is not sorted " << endl;
    }
}