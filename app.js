const gameState = {
  players: ['X', 'O'],
  currentPlayer: "X"
}


//Player 1 name input capture and display
const name1 = document.getElementById("name1");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");

//Player 2 name input capture and display
const name2 = document.getElementById("name2");
const btn2 = document.getElementById("btn2");
const out2 = document.getElementById("output2");

const name3 = document.getElementById("name3");
const btn3 = document.getElementById("btn3")

//The below function and listener capture the users name and assign the value of X. Then, it displays both.
function fun1() {
  if (name1.value.length > 0 && out2.innerHTML !== "Computer-O") {
  out1.innerHTML = name1.value + "-" + gameState.players[0];
  name1.value = ''
  }
}
btn1.addEventListener('click', fun1);

//The below function and listener capture the users name and assign the value of O. Then, it displays both.
function fun2() {
  if (name2.value.length > 0 && out2.innerHTML !== "Computer-O") {
  out2.innerHTML = name2.value + "-" + gameState.players[1];
  name2.value = ''
  }
}
btn2.addEventListener('click', fun2);

//The below function and listener capture the single player's user name and inserts the computer player name.
function fun3() {
  if (name3.value.length > 0 && !out1.innerHTML.length > 0 && !out2.innerHTML.length > 0) {
  out1.innerHTML = name3.value + "-" + gameState.players[0]
  out2.innerHTML = "Computer-" + gameState.players[1]
  name3.value = ''
  }
}
btn3.addEventListener('click', fun3)



// This function passes through squareClick and alternates the index of the players array only if both players have inputted names.
function takeTurns() {
  if (out1.innerHTML.length > 0 && out2.innerHTML.length > 0 && out2.innerHTML !== "Computer-O") {
  gameState.players = [gameState.players[1], gameState.players[0]]
  }
}

// This function passes through the onclick event within each div that represents each box.
function squareClick() {
  inputXO(event.target);
  takeTurns();
  computerPlayer(event.target);
  winningConditions();
}

let counter = 0
//This function operates the entire computer version of the game along with the counter above.
function computerPlayer(event) {
  if (gameOverMessage.innerText.length > 0) {
    return
  }
  if (counter > 7) {
    event.textContent = gameState.currentPlayer
    return
}
//This if statement stipulates when the computer game is allowed to begin.
  if (out1.innerHTML.length > 0 && out2.innerHTML === "Computer-O"){
      let randomCell = Math.floor(Math.random() * 9)
      //This loop is looping through the indexes of each box and storing the innerHTMl of each box within boxValue
      for (let i = 0; i < box.length; i++) {
        let boxValue = box[i].innerHTML
        //This if statement and while loop is responsible for creating a new random number if the player (unknowingly) clicks on the cell that the random number had already generated for "O".
        if (event.id == randomCell) {
          let newRandomNum = Math.floor(Math.random() * 9)
          // console.log(newRandomNum, "initial new random number")
          while (newRandomNum === randomCell) {
            newRandomNum = Math.floor(Math.random() * 9)
            // console.log(newRandomNum, "reassigned new random number")
          }
          // console.log(newRandomNum, "final random num")
          randomCell = newRandomNum
        }
        //If all of the above conditions within this function pass/fail to this point, the below if else/if statements occurs. The below code is what is responsible for the innerHTML being outputted as well as the taking of turns for both the user and computer. The counter exists only for the final square in which line 68 will run if the conditions are met.
        console.log(boxValue, 'before if statement')
        if (randomCell === i && boxValue === "-") {
          event.innerHTML = gameState.players[0]
          boxValue = gameState.currentPlayer
          gameState.players = [gameState.players[1], gameState.players[0]]
          gameState.currentPlayer = gameState.players[0]
          box[i].innerHTML = "O"
          winningConditions()
          gameState.players = [gameState.players[1], gameState.players[0]]
          gameState.currentPlayer = gameState.players[0]
          counter += 2
          console.log(boxValue, 'end of if statement')
        } else if (randomCell === i && boxValue === "X") {
          computerPlayer(event);
        } else if (randomCell === i && boxValue === "O") {
          computerPlayer(event);
        }
      }
  }
}


//This function tells squareClick when to not take a turn and when to take a turn and fill a box. It also changes the content of gameState.currentPlayer
function inputXO(event) {  
  
  if (out1.innerHTML.length > 0 && out2.innerHTML.length > 0 && event.innerText != "-") {
    return !takeTurns();
  } else if (gameOverMessage.innerText.length > 0) {

  } else if (out1.innerHTML.length > 0 && out2.innerHTML.length > 0 && out2.innerHTML !== "Computer-O") {
    gameState.currentPlayer = gameState.players[0]
    event.textContent = gameState.players[0];
  }
}

let gameOverMessage = document.getElementById('game-over-message');
let box = document.getElementsByClassName('box')

//The below function is responsible for outputting the text for the gameOverMessage id
function winningConditions () {
  
  let arrEntry1 = document.getElementById('0').innerHTML
  let arrEntry2 = document.getElementById('1').innerHTML
  let arrEntry3 = document.getElementById('2').innerHTML
  let arrEntry4 = document.getElementById('3').innerHTML
  let arrEntry5 = document.getElementById('4').innerHTML
  let arrEntry6 = document.getElementById('5').innerHTML
  let arrEntry7 = document.getElementById('6').innerHTML
  let arrEntry8 = document.getElementById('7').innerHTML
  let arrEntry9 = document.getElementById('8').innerHTML
  
  for (let i = 0; i < box.length; i++) {
      // console.log(typeof i)
      if (arrEntry1 === gameState.currentPlayer && arrEntry2 === gameState.currentPlayer && arrEntry3 === gameState.currentPlayer){
        gameOverMessage.innerText = "The winner is " + gameState.currentPlayer + "!"
      } else if (arrEntry4 === gameState.currentPlayer && arrEntry5 === gameState.currentPlayer && arrEntry6 === gameState.currentPlayer){
        gameOverMessage.innerText = "The winner is " + gameState.currentPlayer + "!"
      } else if (arrEntry7 === gameState.currentPlayer && arrEntry8 === gameState.currentPlayer && arrEntry9 === gameState.currentPlayer){
        gameOverMessage.innerText = "The winner is " + gameState.currentPlayer + "!"
      } else if (arrEntry1 === gameState.currentPlayer && arrEntry4 === gameState.currentPlayer && arrEntry7 === gameState.currentPlayer){
        gameOverMessage.innerText = "The winner is " + gameState.currentPlayer + "!"
      } else if (arrEntry2 === gameState.currentPlayer && arrEntry5 === gameState.currentPlayer && arrEntry8 === gameState.currentPlayer){
        gameOverMessage.innerText = "The winner is " + gameState.currentPlayer + "!"
      } else if (arrEntry3 === gameState.currentPlayer && arrEntry6 === gameState.currentPlayer && arrEntry9 === gameState.currentPlayer){
        gameOverMessage.innerText = "The winner is " + gameState.currentPlayer + "!"
      } else if (arrEntry1 === gameState.currentPlayer && arrEntry5 === gameState.currentPlayer && arrEntry9 === gameState.currentPlayer){
        gameOverMessage.innerText = "The winner is " + gameState.currentPlayer + "!"
      } else if (arrEntry3 === gameState.currentPlayer && arrEntry5 === gameState.currentPlayer && arrEntry7 === gameState.currentPlayer){
        gameOverMessage.innerText = "The winner is " + gameState.currentPlayer + "!"
      } else if (arrEntry1 !== "-" && arrEntry2 !== "-" && arrEntry3 !== "-" && arrEntry4 !== "-" && arrEntry5 !== "-" && arrEntry6 !== "-" && arrEntry7 !== "-" && arrEntry8 !== "-" && arrEntry9 !== "-") {
        gameOverMessage.innerText = "The game ended in a draw!"
      }
      
    }
  }
  
  let playAgain = document.getElementById('play-again')

  function resetGame() {
    for (let i = 0; i < box.length; i++) {
      box[i].innerText = "-"
  }
  counter = 0
  gameOverMessage.innerText = ''
  out1.innerHTML = ''
  out2.innerHTML = ''
}

  playAgain.addEventListener ('click', resetGame)