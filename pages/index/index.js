chances = 7

function checkLet(guess, key) {
  if (document.getElementById("guessed_letters").textContent.includes(guess)) {
    return
  }
  keyRedactedBox = document.getElementById("keyRedacted")
  keyRedacted = keyRedactedBox.textContent
    if (key.includes(guess)) {
      x = ""
      for (i=0;i<keyRedacted.length; i++) {
        if (guess == key[i]) {
            x += key[i]
        }
        else {
          if (keyRedacted[i] == "_") {
            x += "_"
          }
          else {
            x += key[i]
          }
        }
      }
      
      keyRedactedBox.textContent = x
    }
    
    else{
        document.getElementById("guessed_letters").textContent += `${guess}`
        chances -= 1

      }
    if (checkWin(x) == true) {
      document.getElementById("winbox").textContent = "You Win! Refreshing in 5 seconds."
    }
    else{
      if (chances === 0) {
        document.getElementById("hangman_post").src = "resources/index/hangman_art.png"
        document.getElementById("winbox").textContent = "You Lost! Refreshing in 5 seconds."
        setTimeout(
          function() {location.reload()}, 5000)
       
      }
      }
    
    
}

function checkWin(keyRedacted){
    if (keyRedacted.includes("_")) {
        return false
    }
    return true
    
}



function phraseChoose() {
    phrases = ["pneumonoultramicroscopicsilicovolcanoconiosis", "cat", "modulo", "brownie", "hippopotomonstrosesquippedaliophobia", "bloons tower defense", "six seven", "abc egh klmno qsv", "iodine", "jonas more like old", "cyan magenta yellow black", "hangman", "integer", "function sucks", "wordle", "Yttrium"]
    phrase = phrases[Math.floor(Math.random() * phrases.length)]
    x = ""
    for (i=0; i<phrase.length; i++) {
      if (phrase[i] != " ") {
        x += "_"
      }
      else {
        x += " "
      }
    }
    document.getElementById("keyRedacted").textContent = x
    return phrase
}

function genKeyboard(){
  key = phraseChoose()
  let j = 0;
  let chances = 7
  const alpha = "qwertyuiop*asdfghjkl*zxcvbnm*";
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
        tile.onclick = function(){checkLet(tile.id, key, chances)};
        keyRow.appendChild(tile);
      }

     
      
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