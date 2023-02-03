init();

function init() {
  console.log("init");
  startGame();
}

function startGame() {
  console.log("start");
  userChoice();
}

function computerChoice() {
  console.log("computerchoice");
  animateHands();
}

function userChoice() {
  console.log("userchoice");
  computerChoice();
}

function animateHands() {
  console.log("shaky shaky");
  whoTheWinner();
}

function whoTheWinner() {
  console.log("im the winner");
  showResult();
}

function showResult() {
  console.log("screen");
}

function replay() {
  console.log("replay");
  init();
}

function end() {
  console.log("the end");
}



