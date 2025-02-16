//this in EvenT Listeners :- when 'this' is used in a callback of event handler of something,it refers to that something :-

//usage of this 


let btn = document.querySelector("button") ;
let p = document.querySelector("p") ;
let h1 = document.querySelector("h1") ;
let h3 = document.querySelector("h3") ;


//creating a single function for all 4 so that i can simply use the name of the function inside the call back :-

function ChangeColor()
{
    console.dir(this.innerText); //using this we can display the inner text as this points to the element or tag name directly :-
    this.style.backgroundColor = "blue" ;
}

btn.addEventListener("click",ChangeColor);
p.addEventListener("click",ChangeColor);
h1.addEventListener("click",ChangeColor);
h3.addEventListener("click",ChangeColor);
