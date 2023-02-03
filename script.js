"use strict";

let usercho;
let compcho;

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
  animateHands();
}

function userChoice() {
  console.log("userchoice");

  rock.addEventListener("click", userRock);

  function userRock() {
    usercho = "rock";
    console.log(usercho);
  }

  scis.addEventListener("click", userScis);

  function userScis() {
    usercho = "scis";
    console.log(usercho);
  }

  pape.addEventListener("click", userPape);

  function userPape() {
    usercho = "pape";
    console.log(usercho);
  }

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
  startGame();
}

function end() {
  console.log("the end");
}
