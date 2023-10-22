const timeRemainingEl = document.getElementById("time-remaining");
const scoreEl = document.getElementById("score");

const numberOfHoles = 7;
var chosenHole;
var timeRemaining = 60;
var score = 0;
var gameInProgress = false;

function startGame() {
    gameInProgress = true;
    score = 0;
    updateScore();
    startTimer();
    chooseHole();
}

function startTimer() {
    timerInterval = setInterval(() => {
        if(timeRemaining <=0) {
            endGame();
        }
        else {
            timeRemaining--;
            updateTimeRemaining();
        }
    }, 1000);
}

function selectHole(holeNumber) {
    if(gameInProgress) {
        if(holeNumber == chosenHole) {
            score++;
            updateScore();
            turnOffLight(chosenHole);
            chooseHole();
        }
        else {
            score--;
            updateScore();
        }
    }
    
}

function chooseHole() {
    chosenHole = Math.floor(Math.random()*numberOfHoles);
    console.log(chosenHole);
    turnOnLight(chosenHole);
}

function endGame() {
    clearInterval(timerInterval);
    turnOffLight(chosenHole);
    gameInProgress = false;
}

function turnOnLight(holeNum) {
    document.getElementById(holeNum).style.backgroundColor = 'lime';
}

function turnOffLight(holeNum) {
    document.getElementById(holeNum).style.backgroundColor = 'green';
}

function updateTimeRemaining() {
    timeRemainingEl.innerHTML = timeRemaining;
}

function updateScore() {
    scoreEl.innerHTML = score;
}