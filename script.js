//Adding variables
var time = document.getElementById("timer");
var startBtn = document.getElementById("sbtn");
var resetBtn = document.getElementById("rebtn");
var backBtn = document.getElementById("bkbtn");
var answer = document.querySelectorAll(".qbtn");
var highScore = document.getElementById("view");
var questionEl = document.getElementById("q");
var secondsLeft = 30

//Questions
const questions = [
    {
      question: 'what does CSS stand for?',
      answers: [
        { text: 'Charlie Sierra Sierra', correct: false },
        { text: 'Coding Security System', correct: false },
        { text: 'Cascading Style Sheets', correct: true },
        { text: 'Calibra Syntax System', correct: false }
      ]
    },
    {
      question: 'What does HTML do?',
      answers: [
        { text: 'Connect to the internet', correct: false },
        { text: 'Add responsiveness', correct: false },
        { text: 'Add colors', correct: false },
        { text: 'Structure a website', correct: true }
      ]
    },
    {
      question: 'What is a UI?',
      answers: [
        { text: 'Unemployment Insurance', correct: true },
        { text: 'User Interface', correct: true },
        { text: 'Utility Interval', correct: false },
        { text: 'Unauthorized Icon', correct: false }
      ]
    },
    {
      question: 'What is the best way to debug?',
      answers: [
        { text: 'Console log', correct: false },
        { text: 'Go to a QA professional', correct: false },
        { text: 'Talk to a rubber duck', correct: false },
        { text: 'All of the above', correct: true }
      ]
    },
    {
      question: 'Which OS is superior?',
      answers: [
        { text: 'Ubuntu', correct: true },
        { text: 'Mac', correct: true },
        { text: 'Windows', correct: true },
        { text: 'DOS', correct: true }
      ]
    }

  ]


//Functions
function loadScreen () {
  startBtn.style.display = "initial";
  resetBtn.style.display = "none";
  backBtn.style.display = "none";
  for (var i = 0; i <answer.length; i++) {
    answer[i].classList.add("hide");
  }
  questionEl.textContent = "Coding Quiz Game"

}

function startGame () {
    startBtn.style.display = "none";
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    showQuestion()
}

function resetGame () {
  console.log("the reset button works")  
  questionEl.textContent = "Play again?"
    resetBtn.style.display = "none";
    backBtn.style.display = "none";
    startBtn.style.display = "initial";
    console.log(answer)
    for (var i = 0; i <answer.length; i++) {
      answer[i].classList.add("hide");
    }

}

function viewScores () {
  console.log("the button works") 
  startBtn.style.display = "none";
  resetBtn.style.display = "none";
  backBtn.style.display = "initial";
  questionEl.textContent = "High Scores"
  for (var i = 0; i <answer.length; i++) {
    answer[i].classList.add("hide");
  } 

}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = "Time Left: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

  function showQuestion() {
    questionEl.textContent = questions[1].question

  }


//Listeners
addEventListener("load", loadScreen)
startBtn.addEventListener("click", setTime, startGame);
resetBtn.addEventListener("click", resetGame);
highScore.addEventListener("click", viewScores);
backBtn.addEventListener("click", loadScreen);