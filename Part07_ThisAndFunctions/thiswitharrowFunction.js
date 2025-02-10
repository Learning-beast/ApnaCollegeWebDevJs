// arrow function are compact :- and it has some different extra properties

//arrow function this has some kind of lexical scope - parent ko kisne call kiya hai vo check hoga

const student =  {
    name : "harsh",
    marks : 95,
    prop : this, //global scope as of now
    getName : function()
    {
        return this.name; //calling the name from student object and it output  harsh
    },

    //same thing when we create a function using the arrow function :-

    getMarks : () =>
    {
        return this.marks;
    }
};

console.log(student);
console.log(student.getName()) ;
console.log(student.getMarks()) ;