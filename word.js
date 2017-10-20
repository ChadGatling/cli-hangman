var fs = require('fs');
var inquirer = require('inquirer');
var Letter = require('./letter');

// Easy stringify function
function stringify(object) {
    return JSON.stringify(object, null, 1);
}
// word constructor to get the word from the list file and build its hidden string.
var Word = function() {
    var word;
	var newLetter = new Letter();

    this.challengeArray = [];

    this.getWord = function(callback) {
        fs.readFile('./word-list.txt', "utf8", function(error, data) {
            if (error) throw error;
            else {
                var wordList = data.split(", ");
                var randomIndex = Math.floor(Math.random() * wordList.length);
                word = wordList[randomIndex];
                callback(word);
            };
        });
    };

    this.buildChallenge = function(word, callback) {

		// Check each letter in the word against each letter in the list of letters guessed. Splice in the correct letter 
		// or and underscore with spaces( _ ) if the guess is incorrect.
        for (var wordIndex = 0; wordIndex < word.length; wordIndex++) {

            for (var listIndex = 0; listIndex < newLetter.guessedLetters.length; listIndex++) {
                // console.log("Word: " + word.charAt(wordIndex) + ", List: " + newLetter.guessedLetters[listIndex]);

                if (word.charAt(wordIndex) === newLetter.guessedLetters[listIndex]) {
                	// console.log("Match! ---------------------------");

                	if (this.challengeArray[wordIndex] === undefined || this.challengeArray[wordIndex] === " _ ") {
                		// console.log("Splicing " + newLetter.guessedLetters[listIndex] + " into challengeArray at current index.");
                    	this.challengeArray.splice(wordIndex, 1, word.charAt(wordIndex));
                    	break;
                    } else {
                    	// console.log(this.challengeArray[wordIndex] + " is already in word. I wont change anything.");
                    }
                } else {
                    // console.log("Splicing _ into challengeArray at current index.");
                    this.challengeArray.splice(wordIndex, 1, " _ ");
                }
            }
        }
        console.log(this.challengeArray.join(""));
        callback(word);        
    };

    this.guessLetter = function(answers, callback) {
    	newLetter.guessLetter(answers, callback);
    }
}

module.exports = Word;

// need to a a case for when the letter guessed doesnt match any of the letters in the word
// in that case remove one from guesses and call guessLetter again.
// need to add check for guesses and if equalls zero then game over.
