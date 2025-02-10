//a "good string" is a string tht starts with the letter 'a' & jas a length > 3 . Write aa Program to find if a string is good or not.

// let str = "apple";//output: Good String

let str = "snake";

if((str[0] ==='a') && (str.length >3))
{
    console.log("Good String");
}
else
{
    console.log("Bad String");
}

//output: Good String

//Truthy and Falsy 