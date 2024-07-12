/*----------------*********************----------------*/
/*Implement Two Stacks in an Array */

#include <iostream>
using namespace std;

class Stack
{
public:
    int *arr;
    int size;
    int top1;
    int top2;

    Stack(int size)
    {
        this->size = size;
        this->arr = new int[size];

        this->top1 = -1;
        this->top2 = size;
    }

    void push1(int data)
    {
        top1++;
        if (abs((top2 - top1) == 1))
        {
            cout << " Overflow " << endl;
            return;
        }
        arr[top1] = data;
    }

    void push2(int data)
    {
        top2--;
        if (abs((top2 - top1) == 1))
        {
            cout << " Overflow no Space Available " << endl;
            return;
        }
        arr[top2] = data;
    }

    void pop1()
    {
        if (arr[top1] == -1)
        {
            cout << " Underflow " << endl;
            return;
        }
        arr[top1] = 0;
        top1--;
    }

    void pop2()
    {
        if (arr[top2] == size)
        {
            cout << " Underflow " << endl;
            return;
        }
        arr[top2] = 0;
        top2++;
    }
    int getTop1()
    {
        return arr[top1];
    }
    int getTop2()
    {
        return arr[top2];
    }
};

int main()
{
    Stack st(9);
    st.push1(60);
    st.push1(70);
    st.push1(80);
    st.push1(90);
    st.push2(10);
    st.push2(20);
    st.push2(30);
    st.push2(40);
    st.push2(50);

    cout << " Top Element of Stack 2 :-> " << st.getTop2() << endl;
    st.pop2();
    cout << " Top Element of Stack 2 after pop element 1st time :-> " << st.getTop2() << endl;
    st.pop2();
    cout << " Top Element of Stack 2 after pop element 2nd time:-> " << st.getTop2() << endl;
    cout << endl
         << endl
         << endl;

    cout << " Top Element of Stack 1 :-> " << st.getTop1() << endl;
    st.push1(20);
    st.pop1();
    cout << " Top Element of Stack 1 :-> " << st.getTop1() << endl;
}