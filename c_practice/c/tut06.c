#include <stdio.h>
int main()
{
    char ch;
    printf("Enter the character  \n");
    scanf("%c", &ch);

    if (ch >= 'a' && ch <= 'z')
    {
        printf("Small case character \n");
    }
    else if (ch >= 'A' && ch <= 'Z')
    {
        printf("Upper case character \n");
    }
    else
        printf("Not a valid character \n");
    return 0;
}