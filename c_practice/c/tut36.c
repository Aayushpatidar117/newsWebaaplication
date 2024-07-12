#include <stdio.h>

void main()
{
    int n;
    printf(" Enter the number :-> ");

    scanf("%d", &n);
    int count = 0;

    int arr[10];
    while (n != 0)
    {
        int i = 0;
        arr[count] = n % 10;
        i++;
        count++;
        n = n / 10;
    }
    printf("%d", &arr[count - 2]);
}