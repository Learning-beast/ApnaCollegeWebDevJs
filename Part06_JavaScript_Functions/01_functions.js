

//functions are used to perform same task multiple times 


//declaration of a function :-

function greet()
{
    console.log("Hello World");
}

//calling the function
greet();


function printname()
{
    console.log("harsh singh");
}

printname();


function print1to5()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}

print1to5();


//function to check wheather you are adult or not 

function isAdult()
{
    let age =25;
    if(age >=18)
    {
        console.log("you are an adult")
    }
    else
    {
        console.log("you are not an adult")
    }
}