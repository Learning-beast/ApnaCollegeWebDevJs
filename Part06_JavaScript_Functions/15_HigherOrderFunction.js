//Higher Order Functions :- a function that does one or both takes one or multiple functions as arguments and returns a function


//example of higher order function


function Myname(Name,Callback)
{
 
    console.log("My name is", Name); 
    Callback(); //here i am calling the callback function
}



let age = function()
{
    console.log("I am 20 years old");
}

Myname("Harsh singh",age); //here i am passing an another function as an argument :-while calling the function










//Another example of higher order function:- for example problem statement is :-

//You are given an array of numbers. Write a function that returns the sum of all the even numbers in the array.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = function (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

let even = function (array, callback) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumbers.push(array[i]);
        }
    }
    return callback(evenNumbers);
}

console.log(even(numbers, sum)); // Output should be 30 (2 + 4 + 6 + 8 + 10)