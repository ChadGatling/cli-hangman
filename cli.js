var inquirer = require('inquirer');
var Word = require('./word');

var newWord = new Word();

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guesses = 10;
var wordLocal;

function guessLetter() {
	inquirer.prompt([{
		name: "letter",
		message: "Guess a letter.",
		validate: function(input) {
			if (alphabet.includes(input)) {
				return true;
			} else {
				return false;
			}
		}
	}]).then(function (answers) {
		newWord.guessLetter(answers, function() {
			newWord.buildChallenge(wordLocal, function(wordLocal) {
				guessLetter(wordLocal);
			});
		});
	}); 
}

function startGame(callback) {
	inquirer.prompt([{
	    type: "confirm",
	    name: "playerReady",
	    message: "Do you want to play a game?"
	}]).then(function(answers) {
	    switch (answers.playerReady) {
	        case true:
	            newWord.getWord(function(word) {
	            	wordLocal = word;
	                newWord.buildChallenge(word, function(answers, word) {
	                	guessLetter(answers, word);
	                });
	            });
	            break;
	        case false:
	            console.log("OK, byeeee.");
	            break;
	        default:
	            console.log("Neither true nor false??? WTF did you do!?")
	    }
	});
}

startGame();

