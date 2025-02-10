//Nested Array are arrays that contain other arrays. To access the nested arrays we can use bracket notation with the index value, just like we did to access the elements of the array.
let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

console.log(nums.length); // [[10, 11, 12], 13, 14]


//to access individual elements in the nested arrays we can chain the bracket notation like this:


console.log(nums[0][0]); // 1