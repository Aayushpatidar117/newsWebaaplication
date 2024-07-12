// #include <stdio.h>
// int main()
// {
//     int a = 10, b;
//     b = (a++) + (++a);
//     printf("%i,%i,%i,%i  \n", b, a, a++, ++a);

//     return 0;
// }

#include <stdio.h>
int main()
{
    int a = 10, b;
    b = (a++) + (++a);
    printf("%d,%d,%d,%d  \n", b, a, a++, ++a);

    // printf("%d \n", b);
    // printf("%d \n", a);
    // printf("%d \n", a++);
    // printf("%d \n", ++a);
    return 0;
}