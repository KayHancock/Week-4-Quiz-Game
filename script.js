//Adding variables
var time = document.getElementById("timer");
var startBtn = document.getElementById("sbtn");
var resetBtn = document.getElementById("rebtn");
var highScore = document.getElementById("view");

//Arrays

//Functions
function startGame () {
    console.log("the start button works");
}

function resetGame () {
    console.log("the reset button works");
}


//Listeners
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);