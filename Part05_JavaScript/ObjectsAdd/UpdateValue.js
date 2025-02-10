/*
Add/Update Value :- Change the city to "Mumbai",Add a new property,gender:"Female",Change the marks to "A". 

const student = {
   name : "harsh singh",
   age : 21,
   marks : 94.4,
   city : "Delhi",
}
*/


const student = {
    name : "harsh singh",
    age : 21,
    marks : 94.4,
    city : "Delhi",
};

//to change the value in the object 
student.city = "Mumbai "; //updating the city to "Mumbai"
student.marks = "A"; //updating the marks to "A"

//to create and add a key and value to object 

student.gender = "Male"; //adding


console.log(student); //output :- { name: 'harsh singh', age: 'A', marks: 94.4, city: 'Mumbai





//to delete the value in the object :-syntax:- delete object.key

delete student.age; //deleting the age from the object
