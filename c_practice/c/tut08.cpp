#include <stdio.h>
int main()
{
    int n;
    printf("enter the number : ");
    scanf("%d", &n);
    if (n >= 1 && n <= 9)
    {
        printf("the number is natural numner \n");
    }
    else
    {
        printf("the number is not a natural number \n");
    }
    return 0;
}