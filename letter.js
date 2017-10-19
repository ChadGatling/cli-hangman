var inquirer = require('inquirer');

var Letter = function() {
	this.alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    this.guessedLetters = [" ", "'", "-", "a", "n", "t", "p"];

    this.guessLetter = function() {

        inquirer.prompt([{
            name: "letter",
            message: "Guess a letter."
        }]).then(function(answers) {

        	if (this.alphabet.includes(answers.letter)) {
        		console.log(answers.letter + " added to guessedLetters list.");
        		this.guessLetter.push(answers.letter);
        	} else {
        		console.log(answers.Letter + " has already been guessed.");
        	}
        });
    }
}

module.exports = Letter;