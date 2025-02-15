// Selecting Elements :- 

/*
1) getElementById - Return the Element as an object or null(if not found)

2. Why getElementById() is Useful
Fast & Efficient: It's one of the most efficient methods for selecting elements, as IDs are unique within a page.
Unique Selection: Since IDs are unique, this method will always return only one element (the first matching element with that ID).
Accessing and Modifying Elements: Once you have the element, you can easily modify its content, styles, or attributes.

3. Common Use Cases
Changing Content

javascript
Copy
const heading = document.getElementById('color');
heading.innerHTML = 'New Heading Text!';
Modifying Styles

javascript
Copy
const header = document.getElementById('color');
header.style.backgroundColor = 'green';  // Changes background color
Accessing Other Properties

textContent: Modifies or gets the text content of an element.

javascript
Copy
const header = document.getElementById('color');
console.log(header.textContent);  // Prints the current text content
header.textContent = 'New header text!';
classList: Add, remove, or toggle classes.

javascript
Copy
const header = document.getElementById('color');
header.classList.add('new-class');  // Adds a class
header.classList.remove('old-class');  // Removes a class
attributes: You can get or set attributes like href, src, or any custom attributes.

javascript
Copy
const img = document.getElementById('MainImage');
console.log(img.getAttribute('alt'));  // Gets the alt text of an image
img.setAttribute('alt', 'New image alt text');  // Sets a new alt attribute
4. Error Handling: null Return
When using getElementById(), if no element with the provided ID exists in the DOM, it will return null. Therefore, you should always check for null before performing any operations on the element.
javascript
Copy
const header = document.getElementById('color');
if (header) {
    // Element found, safe to manipulate
    header.style.backgroundColor = 'green';
} else {
    console.error("Element not found!");
}
5. Dynamic Changes to the DOM
If you're working with dynamically added content (i.e., content added after the initial page load), ensure you're targeting elements that are available in the DOM when the script runs.

For example, if you're adding new elements dynamically and then trying to manipulate them, you need to ensure the elements are available before trying to manipulate them.

javascript
Copy
// Example: Add an element and then manipulate it
const newElement = document.createElement('div');
newElement.id = 'newElement';
document.body.appendChild(newElement);

// Now select and manipulate the new element
const addedElement = document.getElementById('newElement');
addedElement.style.backgroundColor = 'blue';
*/


//Selecting the header by its id 'color'
const header = document.getElementById("color");

//Changing the background color to green :-

header.style.backgroundColor = "pink";


//Using the inner html to change the content inside the heading :-Changing Content :-

const heading = document.getElementById('color');
heading.innerHTML = 'Amazing Spider Man!';



//2)getElementByClassname :- returns the elements as an HTML collection or empty collection (if not found) :-In JavaScript, getElementsByClassName is a method used to select elements by their class name. It returns a live HTMLCollection of all elements that have the specified class.

//using class name we can access the element using the id as ids are used to access the elements





//3)getElementByTagName :-\

//selecting the tag name to change the c

let tag_name = document.getElementsByTagName('p')[1].innerText = "Hello World" ;  //so using tag name we can even specify which tag element we wanted to make changes in

tag_name.style = color("yellow") ;




/*
4)Query Selectors :- are highly used in the js to access or select the elements we prefer this 
1)document.querySelector('p') ; //selecting the first p element
2)document.querySelector('#myId') ; //selecting the first p element
3)document.querySelector('.myClass') ; //selecting the first p element

//above are the ones which can select only the  first element but using the queryselectorall we can 

4)document.querySelectorAll('p') ; //selecting all the paragraph we use QuerySelectorAll p element
 
*/

let text = document.querySelector(".oldpara") ;

text.innerHTML = "HarryPotter" ;



//09_UsingPropertiesAndMethods 

//1) innerText :- shows the visible text contained in a node :- ye bas hame text dikhata hai par innerhtml hame sabkuch dikhata hai - jo normal apne ko screen pe output hota hai wo show karta hai ye

//2) textContent :- Shows all the full text (even the hidden one for example if i say <p><b>hello world<b></p> it will output even the bold statement ) 

//3) innerHTML - ye batata hai kee hamne koi bold tag to nhi use kiya text me koi styling to use nhi kee and so on ye sab hame inner html se pata chalti hai 





//10_ATTRIBUTE Manipulation :-


//1)object.getAttribute(attr) ;          2)object.setAttribute(attr,val) ;