//SetTimeout function is used to set the timeout for certain time :-

//syntax :- setTimeout(function(),timeout )  which means we pass an function to set the timeout and then it will execute


function sum(a,b)
{
    console.log(a+b);
}


setTimeout(sum, 5000, 5, 10); //5 seconds later it will print 15 

setTimeout(() => {
    console.log("Apna College");
}, 4000);    //it takes time in milliseconds so if we want a delat of 1 second we need to set 1000 milliseconds