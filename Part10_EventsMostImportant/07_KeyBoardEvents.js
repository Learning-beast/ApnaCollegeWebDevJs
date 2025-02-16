/*
these are the keyboard events 

let btn = document.querySelector("button") ;

even is an default argument
btn.addEventListener("click", function(event)
{
    console.log(event) ;
    console.log("button clicked");
});

btn.addEventListener("dblclick", function(event)
{
    console.log(event) ;
    console.log("button clicked");
});
*/

let inp = document.querySelector("input") ;

//1)key down matlab jab key ko press karte hai
inp.addEventListener("keydown", function(event)
{
    // console.log("key = ", event.key);
    console.log("code = ", event.code);

    if(event.code == "KeyU")
    {
        console.log("character move forward");
    }
    else if(event.code == "KeyD")
        {
            console.log("character move backward");
        }
    else if(event.code == "KeyL")
        {
            console.log("character moves left");
}
    else if(event.code == "KeyR")
    {
      console.log("character moves right") ;
    };


    console.log("key was pressed"); //whenevr you press any button in your keyboard this output will be displayed :-
});

/*
2)key up matlab jab key ko press karne ke baad release karte hai -
inp.addEventListener("keyup", function()
{
    console.log("key was released"); //whenevr you press any button in your keyboard this output will be displayed :-
});
*/