#include <stdio.h>
int main()
{
    int marks;
    printf("Enter marks for(0-100) \n");
    scanf("%i", &marks);

    if (marks >= 90 && marks <= 100)
    {
        printf("A++ \n");
    }
    else if (marks < 90 && marks >= 70)
    {
        printf("A \n");
    }
    else if (marks < 70 && marks >= 30)
    {
        printf("B \n");
    }
    else
    {
        printf("C \n");
    }
    return 0;
}