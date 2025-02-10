// String Methods :-


//Methods are actions that can be performed on objects.

//format is :- stringname.methodname()

//1. length :- It returns the length of the string.

let str = "Hello World";
console.log(str.length);//11

//2. toUpperCase :- It converts the string to uppercase.

let str1 = "Hello World";
console.log(str1.toUpperCase());//HELLO WORLD

//3. toLowerCase :- It converts the string to lowercase.

let str2 = "Hello World";
console.log(str2.toLowerCase());//hello world

//4. charAt :- It returns the character at the specified index.

let str3 = "Hello World";
console.log(str3.charAt(0));//H

//5. indexOf :- It returns the index of the first occurrence of the specified value.

let str4 = "Hello World";
console.log(str4.indexOf("o"));//4


//6. lastIndexOf :- It returns the index of the last occurrence of the specified value.

let str5 = "Hello World";
console.log(str5.lastIndexOf("o"));//7


//7. includes :- It returns true if the string contains the specified value, otherwise it returns false.

let str6 = "Hello World";   
console.log(str6.includes("World"));//true

//8. startsWith :- It returns true if the string starts with the specified value, otherwise it returns false.

let str7 = "Hello World";
console.log(str7.startsWith("Hello"));//true


//9. endsWith :- It returns true if the string ends with the specified value, otherwise it returns false.

let str8 = "Hello World";
console.log(str8.endsWith("World"));//true

//10. slice :- It extracts a part of the string and returns the extracted part in a new string.

let str9 = "Hello World";
console.log(str9.slice(6,11));//World

//11. substring :- It extracts a part of the string and returns the extracted part in a new string.

let str10 = "Hello World";
console.log(str10.substring(6,11));//World


//12. substr :- It extracts a part of the string and returns the extracted part in a new string.

let str11 = "Hello World";
console.log(str11.substr(6,5));//World

//13. replace :- It replaces a specified value with another value in a string.

let str12 = "Hello World";
console.log(str12.replace("World","India"));//Hello India


//14. split :- It splits a string into an array of substrings.


let str13 = "Hello World";
console.log(str13.split(" "));//[ 'Hello', 'World' ]


//15. trim :- It removes whitespace from both ends of a string.


let str14 = "   Hello World   ";
console.log(str14.trim());//Hello World

//16. repeat :- It returns a new string with a specified number of copies of the string.

let str15 = "Hello World";
console.log(str15.repeat(2));//Hello WorldHello World


//17. concat :- It joins two or more strings.

let str16 = "Hello";
let str17 = "World";
console.log(str16.concat(" ",str17));//Hello World

//18. match :- It searches a string for a match against a regular expression, and returns the matches.

let str18 = "Hello World";
console.log(str18.match(/o/g));//[ 'o', 'o' ]

//19. search :- It searches a string for a specified value, and returns the position of the match.


let str19 = "Hello World";

console.log(str19.search("World"));//6


