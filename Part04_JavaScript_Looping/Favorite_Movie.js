// You are supposed to choose your faorite movie and then people should guess that movie if the person guessed the movie right then you should print "Good Work" otherwise you should print "Not matched".

let favoriteMovie = "Solo Leveling" ;

//Send this prompt to the user to guess the movie :-

let guessMovie = prompt("Guess the movie name :") ;

// if(guessMovie == favoriteMovie){
//     console.log("Good Work") ;
// }
// else{
//     console.log("Not matched,Please Try again") ;
// }



while((guessMovie != favoriteMovie) && (guessMovie != "quit"))
{
    console.log("Not matched,Please Try again") ;
    guessMovie = prompt("Wrong guess please  try again:") ;
}

if(guessMovie == favoriteMovie){
    console.log("Good Work") ;
}