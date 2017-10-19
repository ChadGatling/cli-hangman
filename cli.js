var inquirer = require('inquirer');
var Word = require('./word');

var newWord = new Word();

function guessLetter() {
	inquirer.prompt([{
		name: "letter",
		message: "Guess a letter."
	}]).then(newWord.guessLetter());
}

function startGame() {
	inquirer.prompt([{
	    type: "confirm",
	    name: "playerReady",
	    message: "Do you want to play a game?"
	}]).then(function(answers) {
	    switch (answers.playerReady) {
	        case true:
	            newWord.getWord(function(word) {
	                newWord.buildChallenge(word);
	            }, newWord.guessLetter());
	            break;
	        case false:
	            console.log("OK, byeeee.");
	            break;
	        default:
	            console.log("Neither true nor false???")
	    }
	});
}

startGame();
