var inquirer = require('inquirer');

var Letter = function() {
    var self = this;

    this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.guessedLetters = [" ", "'", "-", "a", "n", "t", "p"];
    this.guessLetter = function(answers) {
        if (self.alphabet.includes(answers.letter)) {
            console.log(answers.letter + " added to guessedLetters list.");
            self.guessedLetters.push(answers.letter);
        } else {
            console.log(answers.Letter + " has already been guessed.");
        }
    }
}
module.exports = Letter;