//find maximum in the array using the reduce function 

let arr = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2] ;

// let max = -1;

// for(let i=0 ; i<nums.length; i++)
// {
//     if(max < nums[i])
//         {
//             max = nums[i];
//         } 
// }

// console.log(max) ;


//using the reduce function we can do this :-

let ans = arr.reduce((max,element)=>
{
    if(max < element)
    {
        return element;
    }
    else
    {
        return max;
    }
});
console.log(ans) ; //outputs 8