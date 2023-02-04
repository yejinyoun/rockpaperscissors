"use strict";

let usercho;
let compcho;
let result = "";

const rock = document.querySelector(".rock");
const scis = document.querySelector(".scissors");
const pape = document.querySelector(".paper");

startGame();

function startGame() {
  console.log("start");
  userChoice();
}

function computerChoice() {
  console.log("computerchoice");

  let compchoices = ["rock", "scis", "pape"];

  let randomChoice = Math.floor(Math.random() * 3);

  compcho = compchoices[randomChoice];

  console.log(compcho);

  animateHands();
}

function userChoice() {
  console.log("userchoice");

  rock.addEventListener("click", userRock);

  function userRock() {
    usercho = "rock";
    console.log(usercho);
    computerChoice();
  }

  scis.addEventListener("click", userScis);

  function userScis() {
    usercho = "scis";
    console.log(usercho);
    computerChoice();
  }

  pape.addEventListener("click", userPape);

  function userPape() {
    usercho = "pape";
    console.log(usercho);
    computerChoice();
  }
}

function animateHands() {
  console.log("shaky shaky");

  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  whoTheWinner();
}

function whoTheWinner() {
  console.log("im the winner");

  // win
  if (usercho == "rock" && compcho == "scis") {
    result = "win";
    console.log(result);
  }

  if (usercho == "scis" && compcho == "pape") {
    result = "win";
    console.log(result);
  }

  if (usercho == "pape" && compcho == "rock") {
    result = "win";
    console.log(result);
  }

  // tie
  if (usercho == compcho) {
    result = "tie";
    console.log(result);
  }

  //lose
  if (usercho == "scis" && compcho == "rock") {
    result = "lose";
    console.log(result);
  }
  if (usercho == "rock" && compcho == "pape") {
    result = "lose";
    console.log(result);
  }
  if (usercho == "pape" && compcho == "scis") {
    result = "lose";
    console.log(result);
  }

  setTimeout(showResult, "2000");
}

function showResult() {
  console.log("screen");
  if (result == "win") {
    document.querySelector("#win").classList.remove("hidden");
  }

  if (result == "lose") {
    document.querySelector("#lose").classList.remove("hidden");
  }

  if (result == "tie") {
    document.querySelector("#draw").classList.remove("hidden");
  }
}

function replay() {
  console.log("replay");
  startGame();
}

function end() {
  console.log("the end");
}
