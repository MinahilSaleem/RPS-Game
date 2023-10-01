"use strict"

// get references 
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissors");
let resultLine = document.getElementsByClassName("result");
let userScore = document.getElementsByClassName("userScore");
let computerScore = document.getElementsByClassName("computerScore");

// logic 
let choices = ["rock", "paper", "scissors"];
let computerScores = 0;
let userScores = 0;
// console.log(userScore,computerScore);
function RPSgame(e) {
    // user move 
    let userMove = e.target.id;
    // console.log(userMove);

    // computer move 
    let index = Math.floor(Math.random() *3);
    let computerMove = choices[index];
    // console.log(computerMove);

    // show result line 
    resultLine[0].classList.remove("hide");

    // win/loss logic 
    if (userMove === computerMove) {
        resultLine.innerHTML = "It's a Tie!";
    }else if (
        (userMove === "rock" && computerMove === "scissors") || 
        (userMove === "paper" && computerMove === "rock") || 
        (userMove === "scissors" && computerMove === "paper")
        ) {
            userScores++;
            resultLine[0].innerHTML = `You Won! ${userMove} beats ${computerMove}`;
        
    }else{
        computerScores++;
        resultLine[0].innerHTML = `Computer Won! ${computerMove} beats ${userMove}`;
    }

    userScore[0].innerHTML=userScores;
    computerScore[0].innerHTML =  computerScores;
    
};


// event 
rockBtn.addEventListener("click", RPSgame);
paperBtn.addEventListener("click", RPSgame);
scissorBtn.addEventListener("click", RPSgame);
