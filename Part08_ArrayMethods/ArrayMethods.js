//Array methods in java script :-

/*
1)forEach

2)map

3)filter

4)some

5)every

6)reduce
*/


//1)forEach function :- 

let arr = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
};

arr.forEach(print); // will print every element as an individual



let arr1 = [{
    name: "harsh",
    marks: 95
}, {
    name: "harshal",
    marks: 93
}, {
    name: "rahul",
    marks: 97
}];

arr1.forEach((student) => {
    console.log(student.marks);
}); //it will output the indifidual value of each marks in new line :-