//write an arrow function that return the square of a number 'n'

let square = (n) =>
{
    return n * n;
} 

console.log(square(2));

//compact verion of the above code :- 

let square1 = (n) => (n*n);  //as we are printing or returning a single value we can use parenthesis without even returning the number or value
console.log(square1(2)); 



//Q2) Write a Arrow function that prints "Hello World" 5 times at a intervals of 2s each


let id = setInterval(()=>
{
  console.log("Hello World");
},2000);

//this function is used to stop the interval used time out after 10 seconds :-
setTimeout(() => {
    clearInterval(id);
}, 10000);

