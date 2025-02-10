//question :- for the given string :- let msg = " help! " ; trim it and convert it into uppercase.


let msg = " help! " ;
console.log(msg.trim().toUpperCase()); //output: HELP!


//question :- Separate the "College" part in the above string and replace 'i' with 't' in it

let collegename = "College";

console.log(collegename.slice(1,7).replace('i','t')); //output: tollet