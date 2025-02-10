//Default parameters :- Giving a default value to the arguments :-

 //for example :-

 function sum(a,b=5)
 {
    return a + b;
 }

 console.log(sum(5)); //outputs 10 as b=5 is the default value which we have provided which means even if i dont provide the value of b as an argument while calling the function it will still execute the output.

 console.log(sum(5,7)); //outputs 12 

 //most important point ke parameter jo hai wo by order assign hote hai matlab jo 1st argument hai for eg sum(5) iska matlab ye sirf a ko jake assign hoga 

  