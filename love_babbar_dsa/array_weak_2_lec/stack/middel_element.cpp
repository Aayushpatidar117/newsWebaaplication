/*---------------*************---------------------*/
/* Find The Middle element in The Stack */

#include <iostream>
#include <stack>

using namespace std;

void solve(stack<int> &st, int pos, int &ans)
{
    // Head Recursion
    // Base case of recursion
    if (pos == 1)
    {
        // cout << " the middel element of the given stack is :-> " << st.top();
        ans = st.top();
        return;
    }

    --pos;
    int temp = 0;
    temp = st.top();
    st.pop();

    // Recursive Call

    solve(st, pos, ans);

    // Backtracking

    st.push(temp);
}

int midElement(stack<int> &stk)
{
    int size = stk.size();

    if (stk.empty())
    {
        cout << " Stack is empty, no middle element available " << endl;
        return -1;
    }

    else
    {
        int pos = 0;
        if (size & 1)
        {
            // in case of odd size of stack
            pos = size / 2 + 1;
        }

        else
        {
            // in case of even size of stack
            pos = size / 2;
        }
        int ans = -1;

        solve(stk, pos, ans);
        return ans;
    }
}

int main()
{
    stack<int> stk;

    stk.push(10);
    stk.push(20);
    stk.push(30);
    stk.push(40);
    stk.push(50);
    stk.push(60);
    stk.push(70);
    // stk.push(80);

    int mid = midElement(stk);
    cout << " Mid element in the given stack is :-> " << mid << endl;
    return 0;
}