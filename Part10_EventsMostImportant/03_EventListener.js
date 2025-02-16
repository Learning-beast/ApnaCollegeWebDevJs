//Event Listener :- onlick and onmouseenter ye do property hai jaha pe ek function ke andar ek hee kaam ho pata thaa like multiple kaam ek sath ek function me possible nhi thaa too to solve this problem event listener ka concept aaya :-


//1)addEventListener :- element.addEventListener(event, callback) ;

//example of an event listener :- btn.addEventListener("click", function() {console.log("button clicked");}


let btns = document.querySelectorAll("button") ;

//eventlistener ne dono function ko execute karwaa diya jo onclick nhi karwa paa raha thaa wo  :-

for(btn of btns)
{
    //1)event name is click 
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    
    //2)event name is doubleclick :- dblclick
     btn.addEventListener("dblclick",function()
    {
       console.log("You Double Clicked");
    });
}


function sayHello()
{
    alert("Hello!");
}

function sayName()
{
     alert("Apna College") ;
}