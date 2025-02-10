//Arrow functions :-Implicit Return 

const func = (arg1,arg2) => {value}

//Example 1 :-implicit ka matlab agar ham sirf arrow function ke andar koi vlaue sidhe solve kar rahe ho no console and no return then hame return statement likhnee ke zarurat nhi hai js khud samjh jata hai isse code chota dikhta hai
const mult = (a,b) =>
(a*b) ; //implicit return hota hai iska matlab automatically return hota hai);

console.log(mult(5,6)); //output : 30


// const sum = (a,b) =>
// {
//     console.log(a+b);
// }      we can change this or shorter down the function using the arrow function :-

const sum =(a,b) => a+b; //converted it into a single line function
console.log(sum(2,3));



