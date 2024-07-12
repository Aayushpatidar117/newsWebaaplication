// ------> SUM OF THE ARRAY BY RECURSION <----- //

#include <iostream>
using namespace std;

int getSum(int arr[], int size)
{

    if (size == 0)
        return 0;

    if (size == 1)
        return arr[0];

    // int rpart = ;

    int sum = arr[0] + getSum(arr + 1, size - 1);
    return sum;
}

int main()
{
    int arr[8] = {2, 5, 50, 25, 9, 4, 5, 15};
    int size = 8;

    int sum = getSum(arr, size);
    cout << " the sum is :-> " << sum << endl;

    return 0;
}