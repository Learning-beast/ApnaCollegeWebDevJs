//Create a Function that gives us the average of the 3 numbers :-

function average(a,b,c)
{
    return (a+b+c)/3;
}

console.log("the average of the three numbers is :- ",average(5,10,15));

//whenever we use return function the execution of the program or function which is below it also stops


//function to chek wheather the you are an adult or not 

    function checkAge(age)
    {
        if(age >= 18)
        {
            return true;
        }
        else
        {
            return false;
        }
        //console.log("bye bye"); //this line will never execute because of the return statement
    }

    console.log(checkAge(18)); 




