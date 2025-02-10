// Create a function to roll a dice and always display the vlaue of the dice (1 to 6)


function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;//generating a random number 
    console.log(rand);
}

rollDice(); // calling the function to roll the dice and display the result.
rollDice();