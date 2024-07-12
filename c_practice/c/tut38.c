#include <stdio.h>
#include <math.h>

int fact(int n)
{
    if (n == 0)
    {
        return 1;
    }
    else
        return (n * fact(n - 1));
}

int main()
{

    int num;

    printf("Enter The Number :-> ");
    scanf("%d", &num);

    printf("The Factorial of the %d is %d ", num, fact(num));

    return 0;
}