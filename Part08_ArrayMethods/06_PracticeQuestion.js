//Check if all numbers in our array are multiples of 10 or not //:- we are gonna use every method to check for this

let arr = [10, 20, 30, 40];

let ans =arr.every((element)=> element %10 == 0);
console.log("does are array of all number with multiple of 10",ans);


//Create a function to find the min number in the array  using the reduce function :-

let  nums = [10, 20 , 30, 40 , 5] ;

let min = nums.reduce((min,element1) =>{
    if(min < element1)
    {
        return min;
    }
    else
    {
        return element1;
    }
});

console.log(min);