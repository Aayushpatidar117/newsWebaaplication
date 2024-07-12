// #include <stdio.h>
// int main()
// {
//     int a = 1;
//     // scanf("%d", &a);
//     // if (scanf("%d", &a))
//     // {
//     //     printf("%d \n", a);
//     // }

//     while (printf("%d \n", a))
//     {
//         printf("true \n");
//     }
//     return 0;
// }



#include <stdio.h> 
  
// Driver code 
int main() 
{ 
    int x = 15, y = 25, max; 
    max = (x > y) ? x : y; 
  
    // While loop to check if max variable 
    // is divisible by x and y 
    while (1) { 
        if (max % x == 0 && max % y == 0) { 
            printf("The LCM of %d and %d is %d.", x, y, 
                   max); 
            break; 
        } 
  
        ++max; 
    } 
  
    return 0; 
}