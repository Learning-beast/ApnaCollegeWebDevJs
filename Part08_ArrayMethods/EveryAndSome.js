//Every Method in Array :- Returns true if every element of array gives true for some function. Else returns false.

let array1 = [2,4,6,8] ;
let array2 = [2,4,6,8,3] ;


let newArr = array1.every((element) => (element % 2 == 0));
let newArr1 = array2.every((element) => (element % 2 == 0));


console.log(newArr); //outputs true as every value in the array is true :-
console.log(newArr1);  //it will output false as 3 is not an even number




//Some :- Returns true if some elements of array give true for some function Else it returns false :-
//syntax is :- arr.some(some function definition or name );


let arr3 = [1,3,5,7,10] ; //i have used 4 even number and 1 odd number so it should return true for odd no as in some even if some elements are true it will return true not like every which  will return true only when all the values in the array is true


let newarr = arr3.some((elements) =>(elements%2 != 0));
console.log(newarr) ; //it out puts true even though all the values in the array is not true 