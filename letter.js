function Letter(letter) {
    this.character = letter;
    this.guessed = false;
    this.letters = function() {
        if (this.guessed === " ") {
            this.guessed = true;
            return " ";
        } else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.character;
            }
        }
    }
    this.checkCharacter = function(userGuess) {
        if (userGuess === this.character) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;