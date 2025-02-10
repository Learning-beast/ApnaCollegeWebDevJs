//Rest :- Allows a function to take an indefinite number of arguments and bundle them in an array :-

function sum(...args) //arguments
{
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us: ", args[i]);
    }
}

sum(1, 2, 3, 4);