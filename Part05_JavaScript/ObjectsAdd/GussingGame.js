//User enters a max number and then tries to guess a random generated number between 1 to max


const max = prompt("Enter the max number") ; //user enter maximum no
// console.log(max);

const random = Math.floor(Math.random() * max) + 1; //we generate some random value
// console.log(random  );


let guess = prompt("guess the number"); //we give chance to guess the no to user

while(true) //it means we want to run this loop continously
{
    if(guess == "quit")  
        {
            console.log("user quit");
            break;
        }
}

if(guess == random)
{
    console.log("you are right! congrats!!");
}
else if(guess < random)
{
   guess = prompt("hint : your guess was too small please try afain");
}
else 
{
    quess =  prompt("hint :  your guess was too Large. please try again");
}

