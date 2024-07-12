#include <stdio.h>
int main()
{
    int marks;
    printf("Enter the marks form(0-100) \n");
    scanf("%d", &marks);

    if (marks <= 30 && marks >= 0)
    {
        printf("Fail \n");
    }
    else if (marks > 30 && marks <= 100)
    {
        printf("Pass \n");
    }
    else
    {
        printf("You entred wrong marks \n");
    }
    return 0;
}