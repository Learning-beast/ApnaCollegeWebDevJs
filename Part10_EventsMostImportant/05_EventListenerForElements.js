//Event listener for Elements in java script :-
//  <!-- We can add event listener for multiple elements previously we have applied to button but now we gonna se we can apply to multiple elements -->
      
let p = document.querySelector("p") ;

p.addEventListener("click", function()
{
    console.log("para was clicked") ;
});


//accessing the div using the query selector :-

let box = document.querySelector(".box");

box.addEventListener("mouseenter",function(){
    console.log("mouse inside the box");
});