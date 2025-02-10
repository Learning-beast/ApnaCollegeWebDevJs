/* Map and Filter :-
What is map() in JavaScript?
The map() method creates a new array by applying a given function to each element of the original array. It transforms each element according to the logic defined in the callback function without altering the original array.
Syntax:
array.map(function_to_be_applied)
array.map(function (args) {
    // code;
})

Example 1: In this example, we will transform each element by multiplying with 3.


const numbers = [5, 10, 15, 20, 25, 30];
const multipliedNumbers = 
numbers.map(num => num * 3);
console.log(multipliedNumbers)

Output
[ 15, 30, 45, 60, 75, 90 ]


What is filter() in JavaScript?
The filter() method creates a new array containing only elements that satisfy a specified condition. It does not change the original array and is useful for selecting specific elements from an array based on certain criteria.

Syntax:

array.filter(function_to_be_applied)
array.filter(function (args) {
    // condition;
}) 

Example 1: In this example, we will filter the values greater than 20.

const numbers = [5, 10, 15, 20, 25, 30];
const numbersGreaterThan20 = 
numbers.filter(num => num > 20);

console.log(numbersGreaterThan20);

Output
[ 25, 30 ]

*/


//1)Map Function :- 

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});

console.log(double); //it will outpu t 2,4,6,8 map simply new array return karta hai bas ye jo hamne function banaya hai use ye har element of old array pe perform karta hai and new arra6 return karta hai.



//2 map function example 2

let students = [{
    name: "harsh",
    marks: 95
}, {
    name: "harshal",
    marks: 93
}, {
    name: "rahul",
    marks: 97
}];


let gpa = students.map((el) =>{
    return el.marks/10;
});

console.log(gpa);





//Filter fucnction in js :-syntax : - let newArr = arr.filter(somefunction definition or name);

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9] ;

let ans = nums.filter((num) => (num % 2 == 0)) ;  //even -> true , even -> false  [2, 4, 6, 8] ;

let ans1 = nums.filter((num) => (num % 2 != 0)) ;  //false -> true , odd -> false 

console.log(ans) ;  // filter ka simple matlab apan ek new array banate hai and usme filter lagate hai agar hamne filter ke andar jo function banaya hai agar wo true return karta hai sirf vo hee values it will output false agar hoga to use wo output nhi karega until and unless tumne ek false condition banayi hai and wo true return karta hai


console.log(ans1) ;  // It Outputs :- [1,5,7,9]