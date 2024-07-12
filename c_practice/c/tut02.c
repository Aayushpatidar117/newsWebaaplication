// program to print the averate of three number

#include <stdio.h>

int main()
{
    float a, b, c;

    printf("Enter First number \n ");
    scanf("%f", &a);

    printf("Enter Second number \n ");
    scanf("%f", &b);

    printf("Enter Third number \n ");
    scanf("%f", &c);

    float average = (a + b + c) / 3;
    printf("%f", average);
    return 0;
}