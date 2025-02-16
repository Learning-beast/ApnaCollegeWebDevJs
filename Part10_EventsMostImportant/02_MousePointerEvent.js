//Mouse_PointerEvents :- 1) onclick(when an element is clicked) 2) onmouseenter(when mouse enters an element)


//step 1 ) is to access the button 

// let btn = document.querySelector("button") ; this will work for only 1 button 


let btn = document.querySelectorAll("button") ;

//for of for loop :- this will run for all the btn  

for(btn of btn) {
    //onclick function
    btn.onclick = sayHello ;

    //onmouseenter :- when cursor reaches too button or jab cursor button ke upar jaata hai tab ye hota hai :-

    btn.onmouseenter = function(){
        console.log("You Entered A Button") ;
    }
}
console.dir(btn) ; //this will let us know all the properties we can apply inside the btn 

//as we have set btn on click to a function the moment i click on the button it will trigger the function and output button was clicked in the console



//01)onclick Event
/*

btn.onclick = function() {
    console.log("button was clicked") ; 
    alert("yes you are clicked now ") ;
};

*/

//we can even create a function and assign that function to the onclick event

function sayHello() {
    console.log("Hello!");
    alert("Hello!") ;
};

//now we can assign this function to onclick

btn.onclick = sayHello;

//all important events which we are gonna learn :- most imp

