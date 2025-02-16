//Activity :- i have to creat a random color when i press on Generate Color the div box background color should change with some random color :-

//now what we want is when we press a button it should change to some random color

 let btn = document.querySelector("button"); 

 btn.addEventListener("click",function()
{
    let h1 = document.querySelector("h1");
    let randomcolor = getRandomColor();
    h1.innerText = randomcolor; //which means kee ab random color jo getRandomColor() generate karega uskee value it will show

    //our div is now selected and isme randomcolor ko assign kar diya hai matlab jo niche hamne getrandomcolor banaya hai use div pe laga diya hai to ab div ka colour bhee change hogaa :-
    let div = document.querySelector(".box");
    div.style.backgroundColor = randomcolor;
    console.log("Color Updated") ;
});

//function to generate the random color we can use the math function 
function getRandomColor()
{
 //as we know that math function generate the  number between 0 to 1 which means we multiply it with the range we want in our case we want to generate random numbers from 0 to 255 which is the range of the color floor is also ussed if it generates an decimal number it can convert it into the  a floor number
  let red = Math.floor(Math.random() * 255); 
  let green = Math.floor(Math.random() * 255); 
  let blue = Math.floor(Math.random() * 255); 

  let color =`rgb(${red},${green},${blue})`;

  return color;
}