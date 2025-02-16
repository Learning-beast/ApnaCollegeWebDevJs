// Create a paragraph element using the DOM
let newpara = document.createElement('p'); // para is created but is empty

// Add some text inside the paragraph element
newpara.innerText = "Hi, I am red"; // this will add the value inside the newpara element

// Set the color of the paragraph element to red
newpara.style.color = "red";

// Append the paragraph element to the body or any other DOM element to make it visible on the page
document.body.appendChild(newpara);          //append child is used to create or add it to our html code //appendchild at the end of the parent node

// Log the new paragraph element to the console
console.log(newpara);



//2nd task is to creat a h3 with blue text that says "I am a blue h3!"

//creating an h3 element but currently it is empty
let heading = document.createElement("h3");

//putting some value inside the h3 tag:-
heading.innerText = "I'am a blue h3" ;

//now giveing styling to it

heading.style.color = "blue" ;

//last step is to add it to the body of our html to do that we use append child

document.body.appendChild(heading) ; //now the heading is added to the append child :-

//output the h3 tag in the  console window

console.log(heading) ;


//task 3) create a <div>  with a black border and pink background color with the following element inside of it :-
//another <h1> that says "I'm in a div"
//a <p> that says "ME TOO!"


 //STEP 1 IS TO CREATE A DIV

 let div = document.createElement("div") ;

 //STEP 2 IS TO CREATE A H1 TAG

 let h1 = document.createElement("h1") ;

 //STEP 3 IS TO CREATE A PARA TAG

 let para2 = document.createElement("p") ; //this creates a para element :-


 h1.innerText = "I'm in a div" ;
 para2.innerText = "ME TOO!" ;


//now that we have appended both the tags inside the tag we can give styling to our div :-0

 div.append(h1);
 div.append(para2);

//styling out newly created div

div.style.backgroundColor = "pink";
div.style.border = "2px solid black" ;
div.style.borderRadius = "5px" ;


//now we just need to appendchild into the body of the document and output it too :-

document.body.appendChild(div) ;

//output it to the console screen :-

console.log(div) ;



