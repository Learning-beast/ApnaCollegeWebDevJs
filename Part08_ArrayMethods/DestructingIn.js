//Destructing in js :- Storing vlaues of array into multiple variables

let names = ['harsh', 'rahul' , 'harshal', 'rohan'] ;

//mujhe 1st value ko winner banana hai and second ko runner up and so on to ise short karne ke liye we have a property called destructing 

// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];

//this is called destructing where we create a array with variables and  = it with the array we want to assign this variables to

let [winner, runnerup, secondRunnerup] = names;

console.log(winner); //now it outputs harsh
console.log(runnerup);//rahul
console.log(secondRunnerup); // harshal 



let [winner1, runnerup2, ...others] = names;
console.log(winner1); //output - harsh
console.log(runnerup2); //output - rahul
console.log(others); //this other is made spread which means it will store the rest of the values in the array and it outputs [ 'harshal', 'rohan' ]


