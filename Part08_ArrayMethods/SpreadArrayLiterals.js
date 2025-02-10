//Spread with array literals :-

let arr = [1,2,3,4,5];

let newarr = [...arr];

newarr.push(6);

console.log(arr);

console.log(newarr);


let chars = [..."harsh"];//Outputs [ 'h', 'a', 'r', 's', 'h' ]
console.log(chars);


//now if we have even and odd array and if we want to merge both the array we can use spread as well

let even = [1,2,3,4] ; 
let odd =  [5,6,7,8] ;

let newArray = [...even, ...odd] ; //spread even and odd both 

console.log(newArray) ; //Outputs :- [1, 2, 3, 4, 5, 6, 7, 8]