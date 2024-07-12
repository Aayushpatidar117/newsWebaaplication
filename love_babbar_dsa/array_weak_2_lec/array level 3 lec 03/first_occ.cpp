#include <iostream>
using namespace std;

int firstOcc(int arr[], int n, int t)
{

    int s = 0, e = n - 1;
    int mid = s + (e - s) / 2;
    int ans = -1;
    while (s <= e)
    {
        if (arr[mid] == t)
        {
            ans = mid;
            e = mid - 1;
        }
        else if (arr[mid] > t)
            e = mid - 1;
        else if (arr[mid] < t)
            s = mid + 1;
        cout << " mid : " << mid << " s : " << s << " e : " << e << endl;
        mid = s + (e - s) / 2;
    }
    return ans;
}

int lastOcc(int arr[], int n, int t)
{

    int s = 0, e = n - 1;
    int mid = s + (e - s) / 2;
    int ans = -1;

    while (s <= e)
    {
        // cout << "s : " << s << " e : " << e << " mid : " << mid << endl;
        if (arr[mid] == t)
        {
            ans = mid;
            s = mid + 1;
        }
        else if (arr[mid] < t)
            s = mid + 1;
        else if (arr[mid] > t)
            e = mid - 1;
        // cout << " ans : " << ans << endl;
        mid = s + (e - s) / 2;
    }
    return ans;
}

int main()
{
    int arr[] = {1, 1, 2, 2, 2, 2, 3, 5, 5, 5, 8, 9};
    int n = 12;
    int targat = 9;
    // int ans = lastOcc(arr, n, targat);
    // cout << " The first Occurance of a number " << targat << " is :-> " << firstOcc(arr, n, targat);
    int totalNoOcc = lastOcc(arr, n, targat) - firstOcc(arr, n, targat) + 1;
    cout << " The last Occurance of a number " << targat << " is :-> " << totalNoOcc << endl;
}