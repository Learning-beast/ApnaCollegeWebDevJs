//Arrow Functions in js: -

//1) Arrow Functions are anonymous functions. another way to define a function which is shorter than normal function declaration


//syntax :- const func = (arg1, arg2) => {function definition}
const sum = (arg1,arg2) => {
   console.log(arg1+arg2);
};

sum(2,3);


//using arrow function find the cube of any number

const cube = (n) =>
{
    console.log(n*n*n);
};

cube(3);


const name = () =>
{
    console.log("my name is harsh");
}

name();