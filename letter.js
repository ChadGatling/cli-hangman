var inquirer = require('inquirer');

var Letter = function() {
    var self = this;

    this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.guessedLetters = [" ", "'", "-", "a", "n", "t", "p"];
    this.guessLetter = function(answers ,callback) {
        if (self.alphabet.includes(answers.letter)) {
            console.log("Added " + answers.letter + " to guessedLetters list.");
            self.guessedLetters.push(answers.letter);
            callback();
        } else {
            console.log(answers.Letter + " has already been guessed.");
        }
    }
}
module.exports = Letter;

// if guessedLetters does not include any underscores then you win the game