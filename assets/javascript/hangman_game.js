//Variables defined
	

	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var wins = 0;
	var remaining = 15;
	// var currentGuess = ;
	var pastGuesses;
	// var blanks = "_";

	//define array of word to choose from 
	var movies = ["Toy Story", "Finding Nemo", "The Incredibles", "Ratatouille", "The Good Dinosaur", "Inside Out"];
	
	//empty array to store the guesses
	var guesses = []; 

	//choose a word randomly
	var randomMovie = Math.floor(Math.random()*movies.length);
	var randomChallenge = movies[randomMovie];
	console.log(randomChallenge);
	
	//fill guesses array with underscores
	function underscores(randomChallenge) {
		for (var i = 0; i < randomChallenge.length; i++) {
			guesses[i] = "_";
		}
	}
	document.getElementById("randomChallenge").innerHTML(underscores);

		//put guesses in a string
// 		pastGuesses = guesses.join(" "); 
// 		pastGuesses = document.getElementById("guessed").innerHTML
// 	}

// function letter() {
// 	var letter = document.getElementById("letters").value;
// }


	


// //Create blanks for letters
// 	// document.getElementById("placeholders").innerHTML = blanks;


	











