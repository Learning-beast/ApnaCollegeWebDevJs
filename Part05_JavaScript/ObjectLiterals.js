 //object literala re use to storee keye value pair

//Declaration of Object Literals :-

let city = {
    name: 'Pune',
    population: 1021321,
    country: 'India'
};


//Accessing Object Literals :-When ever we want to access the value of the key in the object literals we use the dot operator for example .
console.log(city.name); // Pune




const student = {
    name: 'Harsh singh',
    age: 20,
    marks : 94.4,
    city: 'Pune'
};

//accessing object literals

console.log(student.name); // Harsh singh


 //3)type to store data in the object literals :-


 const items = {
    price:100,
    discount:10,
    color:['red','green','blue']
 };


 console.log(items.color[0]); // red