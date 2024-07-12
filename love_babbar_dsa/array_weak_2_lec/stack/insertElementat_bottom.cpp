/*--------------*******************************-------------------*/
/* Insert Element at The Bottom of the Stack */
#include <iostream>
#include <stack>
using namespace std;

void solve(stack<int> &st, int &n)
{
    // Head Recursion
    // Base Case
    if (st.empty())
    {
        st.push(n);
        return;
    }

    int temp = st.top();
    st.pop();
    // Recursive Call
    solve(st, n);
    // Backtraking
    st.push(temp);
}

int main()
{
    stack<int> stk;
    stk.push(10);
    stk.push(30);
    stk.push(20);
    stk.push(50);
    stk.push(39);
    stk.push(90);
    stk.push(25);

    int pos = stk.size();
    int n = 1000;
    cout << " Size of Stack Before Inserting element at the Bottom :-> " << stk.size() << endl;
    solve(stk, n);

    cout << " Size of Stack After Inserting element at the Bottom :-> " << stk.size() << endl;

    while (!stk.empty())
    {
        cout << stk.top() << endl;
        stk.pop();
    }

    return 0;
}