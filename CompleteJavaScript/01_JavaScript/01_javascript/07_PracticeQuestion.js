//use switch statement to print the day of the week using a number variable day  with values 1 to 7. where 1 is Sunday, 2 is Monday, 3 is Tuesday and so on. If the value of day is not in the range of 1 to 7 then print "Invalid Day".


// let day = "1";
let day = "3";


switch(day)
{
    case "1":
        console.log("Sunday");
        break;
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break;
    case "4":
        console.log("Wedenesday");
        break;
    case "5":
        console.log("Thursday");
        break;
    case "6":
        console.log("Friday");
        break;
    case "7":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}
