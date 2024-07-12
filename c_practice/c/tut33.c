#include <stdio.h>
int main()
{
    printf("Enter the number : \n ");
    int a;
    scanf("%d", &a);
    for (int i = 1; i <= a; i++)
    {
        int n;
        printf("enter %d number \n", i);
        scanf("%d", &n);
        if (n % 2 == 0)
        {
            printf("even number \n ");
        }
        else
        {
            printf("odd number \n");
        }
    }
}