//Reduce Method :- it reduces the array to a single value
//Syntax :- arr.reduce(reducer function with 2 variable for (accumulator, element)); 


let nums = [1, 2, 3, 4];

let  finalValue = nums.reduce((result, element)=> result+element)

console.log(finalValue); //output 10

