#include <stdio.h>
int main()
{
    int r, n, sum = 0;
    scanf("%i", &n);
    int temp = n;
    while (n > 0)
    {
        r = n % 10;
        sum += (r * r * r);
        n = n / 10;
    }
    if (sum == temp)
    {
        printf("number is armstorng \n");
    }
    else
    {
        printf("number is not armstrong \n");
    }
    return 0;
}