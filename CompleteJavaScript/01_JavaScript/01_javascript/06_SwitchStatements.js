//SwitCH statement is used when we have multiple conditions to check. It is similar to if else statement but more readable and easy to understand and also when we have some fixed values which we need to compare.

// let color = "red" ;
let color = "green" ;

switch(color)
{
    case "red":
        console.log("Color is Red");
        break;
    case "blue":
        console.log("Color is Blue");
        break;
    case "green":
        console.log("Color is Green");
        break;
    default:
        console.log("Broken Light");
}