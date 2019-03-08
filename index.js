//random Number generator
function randomGen() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  return randomNumber1;
}

//Change first Dice
var dice1 = randomGen();
document.querySelector(".img1").setAttribute("src", "images/dice"+dice1+".png");

//Change second dice
var dice2 = randomGen();
document.querySelector(".img2").setAttribute("src", "images/dice"+dice2+".png");

//see who is the winner
if (dice1 > dice2) {
  var winner = "🚩 Player 1 Wins!";
} else if (dice2 > dice1) {
  var winner = "Player 2 Wins! 🚩";
} else {
  var winner = "Draw!";
}

//print winner to heading
document.querySelector("h1").textContent = winner;
