/*Q1)Write a JS program to delete all occurrences of element ‘num’ in a given array.
 Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
 Result should be arr = [1, 3, 4, 5, 6, 3]

 Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6

Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25

Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1

Qs5. Find the largest number in an array with only positive numbers.
 */


//ans1) 

let arr = [1, 2, 3, 4, 5, 6, 2, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
        arr.splice(i, 1);
        i--;
    }
}

console.log("My new array is ",arr);


//ans2) Write a JS program to find the no of digits in a numebr.

let number = 287152;

let count = 0;
