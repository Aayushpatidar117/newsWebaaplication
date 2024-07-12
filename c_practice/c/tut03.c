#include <stdio.h>
int main()
{
    char ch;
    printf("Enter character : \n");
    scanf("%c", &ch);

    if (ch >= '0' && ch <= '9')
    {
        printf("Given character is DIGIT \n");
    }
    else
    {
        printf("Given character is not a DIGIT \n");
    }
    return 0;
}