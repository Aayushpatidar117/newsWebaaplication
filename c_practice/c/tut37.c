// // #include<stdio.h>

// // int fib(int n){
// //     int f[n+2];
// //     int i;

// // }

// // // int main(){
// // //     int n = 10;
// // //     scanf("%d",n);

// // //     fib(n);
// // //     return 0;
// // // }

// // #include<stdio.h>
// // int fib(int n)
// // {
// //     int f[n+2];
// //     int i;
// //     f[0] = 0;
// //     f[1] = 1;
// //     for (i = 2; i < n; i++){
// //         f[i] = f[i-1] + f[i-2];
// //         printf("%d ", f[i]);
// //     }
// // }
// // int main ()
// // {
// // int n = 10;
// // fib(n);
// // getchar();
// // return 0;
// // }

// #include <stdio.h>

// int main()
// {
//     int n, count = 0;
//     scanf("%d", &n);

//     while (n != 0)
//     {
//         count++;
//         n /= 10;
//     }
//     printf("%d", count);
//     return 0;
// }

#include <stdio.h>
#include <math.h>

int getpoj(int num, int i)
{

    int ans = (num / (int)pow(10, i)) % 10;
    return ans;
}

int main()
{
    int n, count = 0;
    int position;

    printf("enter the value");
    scanf("%d", &n);
    scanf("%d", &position);

    while (n != 0)
    {
        
        count++;
        n /= 10;
    }
    int pos = count - position;
    printf("the %d position of %d is %d ", position, n, getpoj(n, pos));
    return 0;
}