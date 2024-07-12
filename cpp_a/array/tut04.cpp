//  <<<<< REVERSE THE ARRAY >>>>>

#include <iostream>
#include <vector>
using namespace std;

int print(vector<int> v)
{
    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << " ";
    }
}

vector<int> reverse(vector<int> v)
{

    int s = 0;
    int e = v.size() - 1;
    while (s <= e)
    {
        swap(v[s], v[e]);
        s++;
        e--;
    }
    return v; //  9,12,5,2,1,18,28,8
}

int main()
{
    vector<int> v;

    v.push_back(9);
    v.push_back(12);
    v.push_back(5);
    v.push_back(2);
    v.push_back(1);
    v.push_back(18);
    v.push_back(28);
    v.push_back(8);

    vector<int> ans = reverse(v);

    print(ans);
    return 0;
}