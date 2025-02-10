//Logical operators are used to determine the logic between variables or values. so there are three types of logical operators in JavaScript.which are as follows: logical AND, logical OR, and logical NOT. syntax for logical operators is &&, ||, and ! respectively.

//it means that in the case of logical AND, both conditions should be true to get the output as true. if any one of the conditions is false then the output will be false. but in the case of logical OR, if any one of the conditions is true then the output will be true. and in the case of logical NOT, it will reverse the output. if the output is true then it will return false and if the output is false then it will return true.


let marks = 90;

//if we want to take input from the user we use this prompt fucntion

// let marks = prompt("Enter your marks");

//convert the input into the number 

marks = Number(marks);

if(marks >= 90 && marks <= 100)
{
    console.log("A+");
}

else if(marks >= 80 && marks < 90)
{
    console.log("A");
}

else if(marks >= 70 && marks < 80)
{
    console.log("B+");
}

else if(marks >= 60 && marks < 70)
{
    console.log("B");
}

else if(marks >= 50 && marks < 60)
{
    console.log("C+");
}

else
{
    console.log("Fail");
}


