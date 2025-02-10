//Objects of Objects :- 

//storing information of mutiple students in an array

const classinfo = {
    //object 1
    aman: {
        grade: "A+",
        city: "Delhi",
    },
    //object 2
    harsh: {
        grade: "A",
        city: "Mumbai",
    },
    //object 3
    rahul: {
        grade: "B",
        city: "Pune",
    }
};



//to access the elements in the objects of object :-

console.log(classinfo.aman);
console.log(classinfo.harsh);
console.log(classinfo.rahul);



console.log(classinfo.aman.grade);
console.log(classinfo.aman.city);
console.log(classinfo.harsh.grade);


console.log(classinfo);




const classinfo1 = [
    //object 1
    {
        grade: "A+",
        city: "Delhi",
    },
    //object 2
    {
        grade: "A",
        city: "Mumbai",
    },
    //object 3
    {
        grade: "B",
        city: "Pune",
    }
];


console.log(classinfo1[0]);
console.log(classinfo1[1]);
console.log(classinfo1[2]);


console.log(classinfo1[0].grade);
console.log(classinfo1[0].city);
console.log(classinfo1[2].city);


//to make changes in the array of objects:-

console.log(classinfo1[0].grade = "A");


console.log(classinfo1);






