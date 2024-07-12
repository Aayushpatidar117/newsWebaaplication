//  -----> QUICK SORT  <----- //

#include <iostream>
using namespace std;

int partition(int *arr, int s, int e)
{
    int pivot = arr[s];
    int cnt = 0;
    for (int i = s + 1; i <= e; i++)
    {
        if (arr[i] <= pivot)
        {
            cnt++;
        }
    }

    int pivotindex = s + cnt;
    swap(arr[pivotindex], arr[s]);

    int i = s;
    int j = e;
    while (i < pivotindex && j > pivotindex)
    {

        while (arr[i] <= pivot)
        {
            i++;
        }

        while (arr[j] > pivot)
        {
            j--;
        }

        if (i < pivotindex && j > pivotindex)
        {
            swap(arr[i++], arr[j--]);
        }
    }
    return pivotindex;
}

void quickSort(int *arr, int s, int e)
{

    if (s >= e)
        return;

    int p = partition(arr, s, e);

    quickSort(arr, s, p - 1);
    quickSort(arr, p + 1, e);
}

int main()
{
    int arr[10] = {8, 9, 7, 5, 4, 6, 2, 13, 4, 20};
    int n = 0;

    quickSort(arr, 0, n - 1);

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}

// code studio question solution code

/*
#include <bits/stdc++.h>

void solve2(vector<int>& arr,int s,int e){

    int pivot = arr[s];
    int cnt =0;

    for(int i=s+1;; i<e;i++){
        if(arr[i] < pivot)
            cnt++;
    }

    int pivotindex = s+cnt;
    swap(arr[s],arr[pivotindex]);

    int i = s;
    int j= e;

    while (i<pivotindex && j>pivotindex){

        while(arr[i]<arr[pivotindex])
            i++;

        while(arr[j] > arr[pivotindex])
            j--;
        if(i<pivotindex && j>pivotindex){
            swap(arr[i++],arr[j--]);
        }

    }

}

void solve1(vector<int>& arr,int s,int e){

    if(s>=e)
        return;

    int p = solve2(int arr,s,e);
    solve1(arr,s,p-1);
    solve1(arr,p+1,e);
}


vector<int> quickSort(vector<int> arr)
{
   int n = arr.size();
   solve1(arr,0,n-1);
}

*/