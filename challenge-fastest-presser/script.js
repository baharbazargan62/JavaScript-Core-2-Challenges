
document.addEventListener("keypress", keyBoardEvents);
let spanCountS=document.querySelector('#p1-coun')
let spanCountL=document.querySelector('#p2-coun')
  let inputEl=document.getElementById('seconds');
  let buttonEl=document.getElementById('btn-start')
  let winner=document.getElementById('winnertext')
  let timer=inputEl.value
  let game=false;
let CountL=0;
let CountS=0;
function startGame() {
  game=true;
   let interval=setInterval(() => {
  timer--
  if(timer<=0){
    clearInterval(interval)
    setWinner()
    game=false;
  }
},1000);
 }
 // When the game finishes, set the winning playe
function setWinner() {
  if (CountS > CountL) {
    winner.innerText = "Player One Won!!";
  } else if (CountS < CountL) {
    winner.innerText = "Player Two Won!!";
  } else if (CountL === CountS) {
    winner.innerText = "Players Tied!";
  }
}
function keyBoardEvents(e) {
  if (e.keyCode === 83 && game===true ) {
    CountS++
    spanCountS.innerText=CountS
    // On 'S' Pressed
  } else if (e.keyCode === 76 && game===true) {
    CountL++
    spanCountL.innerText=CountL
    // On 'L' Pressed
  }
}
document.addEventListener("keypress", keyBoardEvents);
buttonEl.addEventListener('click',()=>{
  startGame()
})