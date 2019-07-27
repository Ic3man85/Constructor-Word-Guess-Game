let Letter = require("./letter");


function Word(word) {
    this.ansArray = [];
    for (let i = 0; i < word.length; i++) {
        let w = new Letter(word[i]);
        this.ansArray.push(w);
    }
    let display = function() {
        let display = "";
        for (let i = 0; i < this.ansArray.length; i++) {
            display += this.ansArray[i] + " ";
        }
        console.log(display);
    }
    let guess = function(input) {
        for (let i = 0; i < this.ansArray.length; i++) {
            this.ansArray[i].checkCharacter(input);
        }
    }
}

module.exports = Word;