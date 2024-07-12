#include <stdio.h>
int main()
{
    int k;
    printf("enter the number of even number you want to enter ");
    scanf("%d", &k);
    int n;

    for (int i = 1; i <= n; i++)
    {
        if (n % 2 == 0)
        {
            scanf("%d \n", &n);
            printf("%d \n", n);
        }
        else
        {
            printf("you entered odd number ");
        }
    }
}