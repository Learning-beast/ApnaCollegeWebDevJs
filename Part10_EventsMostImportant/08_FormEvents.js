//Form Events in js :-

let form = document.querySelector("form");

//submit event inside form and there are multiple more events like this :-

form.addEventListener("submit",function(event)
{
    //agar hame alert same page pe rakhna hai dusre kise page pe hame redirect nhi karna then ye use hota hai :-
   
    event.preventDefault();
    alert("form submitted") ;
});


