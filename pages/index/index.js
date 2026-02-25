function checkLet(guess, key) {
    for (i=0;i<key.length - 1; i++) {
        if (guess == key[i]) {
            key[i] = guess

        }

    }
    /*write to div*/
    
}

function checkWin(){
    /*get solved/unsolved key*/
    if ("_" in /*key*/ ) {
        return false
    }
    /*win sequence*/
}

function phraseChoose() {
    phrases = ["pneumonoultramicroscopicsilicovolcanoconiosis", "cat", "modulo", "brownie", "hippopotomonstrosesquippedaliophobia", "bloons tower defense", "six-seven", "abc egh klmno qsv", "iodine", "jonas more like old", "cyan magenta yellow black", "hangman", "integer", "function sucks", "wordle"]
    phrase = phrases[Math.floor(Math.random() * phrases.length)]
    return phrase
}
