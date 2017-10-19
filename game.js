var fs = require('fs');

var wordList;

function buildWordList() {
	fs.readFile('./word-list.txt', "utf8", function(error, data) {
	    if (error) throw error;
	    else {
	        wordList = data.split(", ");
	    };
	});
}

buildWordList();
console.log(wordList);