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

function genKeyboard(){
  key = phraseChoose()
  let j = 0;
  const alpha = "qwertyuiop*asdfghjkl*zxcvbnm* ";
  const keyboard = document.createElement('div');
  keyboard.id = 'board';
  const text_box = document.getElementById('text_box');
  const body = document.getElementsByTagName('body')[0];
  for (let i=0; i < 4; i++){
    const keyRow = document.createElement('div');
    keyRow.className = 'row';
    while(alpha[j] != '*' && alpha[j] !== undefined){
      const tile = document.createElement('div');
      tile.className = 'key';

      if(alpha[j] == ' '){
        ;
      }
      else{
        tile.textContent = alpha[j].toUpperCase();
        tile.id = alpha[j];
        tile.onclick = function(){checkLet(tile.id, key)};
      }

     
      keyRow.appendChild(tile);
      keyboard.append(keyRow);
      j++;
    }j++;
  }
  body.appendChild(keyboard);
}

function keyPress(key, location){
  console.log(key);
  location.textContent += key;
}