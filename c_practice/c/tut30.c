#include <stdio.h>

// // void main()
// // {
// //     // int a;
// //     // a = 10;
// //     // do
// //     //     while (a++ < 10)
// //     //         ;
// //     // while (a++ <= 11);
// //     // printf("%d", a);
// // }

// // void main()
// // {
// //     printf("%d", -2 && 2);
// // }

// // int x;
// // int modifyvalue()
// // {
// //     return (x += 10);
// // }
// // int changevalue(int x)
// // {
// //     return (x += 1);
// // }
// // void main()
// // {
// //     int x = 10;
// //     x++;
// //     changevalue(x);
// //     x++;
// //     modifyvalue();
// //     printf("First output:%dn", x);
// //     x++;
// //     changevalue(x);
// //     printf("Second output:%dn", x);
// //     modifyvalue();
// //     printf("Third output:%dn", x);
// // }

// void main()
// {
//     printf("%d%d%d", 50, 100);
// }

// // #include<stdio.h>
// // {
// // 	char arr[11]="The African Queen";
// // 	printf("%s", arr);
// // 	return 0;
// // }

// void f1()
// {
//     int a = 0;
//     ++a;
//     printf("%d", a);
// }
// main()
// {
//     int a = 10;
//     f1();
//     f1();
//     f1();
//     printf("%d", a);
//     return 0;
// }

// #include "stdio.h"
// extern int a;
// main()
// {
//     void fun();
//     printf("\n a=%d", a);
//     fun();
//     return 0;
// }
// int a = 7;
// void fun()
// {
//     printf("\n in fun a=%d", a);
// }

// void main()
// {
//     int a, b;
//     for (a = b = 10; a; printf("%d%d%d", a, b))
//         a = b++ <= 12;
//     printf("%d%d", a + 10, b + 10);
// }

// #include "stdio.h"
// main(){
// 	extern int a=5;
// 	printf("%d",a);
// 	return 0;
// }

// #include "stdio.h"
// extern int a;
// main()
// {
//     printf("\n a=%d", a);
//     return 0;
// }
// int a = 5;

// void main()
// {
//     int a = 1;
//     while (a++ <= 1)
//         while (a++ <= 2)
//             ;
// //     printf("%d", a);
// // }

// PROABLEM IN PRINTING IN OUTPUT

// int main()
// {

//     int a = 10, b;
//     b = (a++) + (++a);
//     // printf("%d \n", a);
//     // printf("%d \n", b);
//     printf("%i,%i,%i,%i \n", b, a++, a, ++a);
//     // printf("%d \n", a++);
//     // printf("%d \n", a);
//     // printf("%d \n", ++a);
// }

// #include<stdio.h>
// int main()
// {
//     int a = 320;
//     char *ptr;
//     ptr = (char *)&a;
//     printf("%d", *ptr);
//     return 0;
// }

// main()
// {
//     int x = 20, y = 35;
//     x = y++ + x++;
//     y = ++y + ++x;
//     printf("%d%d", x, y);
// }

// void main()
// {
//     int i, j;
//     for (i = 0, j = 5; j > 0, i < 10; i++, j--)
//         printf("pskills.org \n");
// }

// main()
// {
//     int a, b, c;
//     a = 10;
//     b = 20;
//     c = printf("%d", a) + ++b;
//     printf("\n%d", c);
// }

///
// main()
// {
//     int a = 10;
//     // for (i = 9; i; i = i - 2)
//     // {
//     //     printf("\n%d", i);
//     // }

//     printf("%d %d", a, !a++);
// }

// void main()
// {
//     int i;
//     i = 10;
//     if (i == 20 || 30)
//     {
//         printf("True");
//     }
//     else
//     {
//         printf("False");
//     }
// }

// main()
// {
//     if (1, 0)
//     {
//         printf("True");
//     }
//     else
//     {
//         printf("False");
//     }
// }

// main()
// {
//     int i, j, *ptr, *ptr1;
//     i = 10;
//     j = 10;
//     ptr = &i;
//     ptr1 = &j;
//     if (ptr == ptr1)
//     {
//         printf("True");
//     }
//     else
//     {
//         printf("False");
//     }
// }

// #include<stdio.h>
// int main()
// {
//     int a = 320;
//     char *ptr;
//     ptr = (char *)&a;
//     printf("%d", *ptr);
//     return 0;
// }

// #include <stdio.h>
// {
//     char arr[11] = "The African Queen";
//     printf("%s", arr);
//     return 0;
// }

// void main()
// {
//     int i;
//     i = 2;
// pskills:
//     printf("%d \n", i);
//     i = i + 2;
//     if (i <= 20)
//         goto pskills;
// }

// main()
// {
//     printf(3 + "Proskills" + 4);
// }

// main()
// {
//     printf("%c", "Pskills"[4]);
// }

// main()
// {
//     int i;
//     i = 10;
//     printf("%d\t", 5, 6);
//     printf("%d", i, i++);
// }

// int main()
// {
//     int a = 10, b = 20;
//     printf("%d", a == b);
// }

// main()
// {
//     int i, j;
//     i = 10;
//     for (j = i == 10; j <= 10; j++)
//     {
//         printf("\n%d", j);
//     }
// }

// int main()
// {
//     printf("i am in");

//     int a = 1;
//     while (a <= 100)
//         ;
//     {
//         printf("%d", a++);
//     }
// }

main()
{
    char *ptr = "Pskills.org";
    char a =
        printf("%c", ++*ptr++);
}