//Write a function to print the sum of the numbers from 1 to n:-


function getsum(n)
{
    let sum = 0;

    for(let i=1;i<=n;i++)
    {
        sum += i;
    }
    return sum;
}

console.log(getsum(10)); // should print 55 (1+2+3+4+5+6+7+8+9+10)

 

