/*----------------*****************------------------*/
/*Code to Insert Elements in Sorted Stack */
#include <iostream>
#include <stack>
using namespace std;

void insert(stack<int> &st, int ele)
{
    // Head Recursion
    // Base Case
    if (st.empty() || ele > st.top())
    {
        st.push(ele);
        return;
    }
    int temp = st.top();
    st.pop();

    // Recursive Call
    insert(st, ele);

    // Backtraking

    st.push(temp);
}

int main()
{
    stack<int> st;

    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);
    st.push(50);
    st.push(60);
    st.push(70);
    st.push(90);
    st.push(100);
    st.push(110);

    int element = 38;
    insert(st, element);

    cout << endl;
    cout << "size of stack is " << st.size() << endl;
    cout << "Printing Stack after Inserting a Element :-> " << endl;

    while (!st.empty())
    {
        cout << st.top() << "  ";
        st.pop();
    }
    return 0;
}