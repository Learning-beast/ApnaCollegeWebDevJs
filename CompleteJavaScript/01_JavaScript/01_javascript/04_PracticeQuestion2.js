// Question Create a system to calculate popcorn prices based on the size  customer asked for :                                             
// if size is 'XL', Price is Rs 250                                       
// if size is 'L', Price is Rs 200                                        
// if size is 'M', Price is Rs 100                                        
// if size is 'S', Price is Rs 50

// Solution

// let size = "XL" ;
let size = "L" ;
let price = 0;

if(size == "XL")
{
     price = 250;
     console.log(`the price of the size is ${price}`);
}

else if(size == "L")
{
     price = 200;
     console.log(`the price of the size is ${price}`);
}

else if(size == "M")

{
    price = 100;
    console.log(`the price of the size is ${price}`);
}


else
{
  price = 50;
  console.log(`the price of the size is ${price}`);
}