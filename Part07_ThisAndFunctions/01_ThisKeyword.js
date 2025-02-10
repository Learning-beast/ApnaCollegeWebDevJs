
const student = {
    name: "Harsh singh",
    age : 20,
    eng : 95,
    math : 90,
    physics : 90,

    //if we want to define a method inside the object we can do that 
    
    getAvg()
    {
        // let avg = (eng + math + physics)/3; aisa karne ka ye matlab hai kee abhee is method ko nhi pata kee english math and physics ke kya value hai to ye agar ise batana hai to this keyword ka use karte hai 
        let avg = (this.eng + this.math + this.physics)/3;
        console.log(`${this.name}  got avg marks = ${avg}`);
    }


}



// to access the object

console.log(student.name); // Harsh singh

student.getAvg(); // 92.66666666666667  


//jab bhee hame object ke andar parameter ko call ya use karna hota hai object ke andar wale method me to we use this keyword