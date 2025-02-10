//Destructuring in objects :-

const student = {
  name : "harsh singh",
  age : 20,
  class : "3rd year",
  subjects : ["dsa","webdev","cloud computing"],
  username : "harsh@123",
  password : "abcd"
};

/*
ye karke bhee access kar skte hai par what if kee object ke andar multiple values hai to easy way is to destructure the object 

let username = student.username;
let password = student.password;

console.log(username) ; //outputs harsh@123
console.log(password) ; //outputs abcd

*/

let {username,password} = student ; //iska ye matlab hai ke ab username ke andar direct object kee value aa chuki hai kyuki hamen = student object name kiya hai and now we can simply log it :- to get the result
 
console.log(username); // outputs :- harsh@123
console.log(password); // outputs :- abbcd


//now agar ye username hai iske jagah agar mujhe koi aur variable ka naam rakhna hai then simply username : user  iska matlab username jo hai wo object ke andar ke key hai and user is the name of the variable i gave which contains the value of username key

let {username : user,password : pass} = student ;

console.log(user) ; //it will still output harsh@123 
console.log(pass) ; //it will still output abcd
