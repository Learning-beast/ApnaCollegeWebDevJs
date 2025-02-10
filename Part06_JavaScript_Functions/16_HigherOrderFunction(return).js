//Higher order functions :- not that important so when i come back chill harsh dont worry

function oddEvenTest(request)
{
    if(request == "odd")
    {
        return function(n)
        {
        console.log(!(n%2 == 0));
    }
}

    else if(request == "even")
    {
        return function(n)
        {
            console.log(n % 2 == 0);
        }
    }
    else
    {
        console.log("Invalid request");
    }
}


let request = "odd";