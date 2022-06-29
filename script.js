//Adding variables
var time = document.getElementById("timer");
var startBtn = document.getElementById("sbtn");
var resetBtn = document.getElementById("rebtn");
var backBtn = document.getElementById("bkbtn");
var answer = document.querySelectorAll(".qbtn");
var highScore = document.getElementById("view");
var questionEl = document.getElementById("q");
var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var submitBtn = document.getElementById("submit");
var form = document.getElementById("over");
var initials = document.getElementById("text");
var correctMsg = document.getElementById("correct");
var wrongMsg = document.getElementById("wrong");
var myButtons = document.querySelectorAll(".qbtn")
var scoreField = document.getElementById("scoreField")
var secondsLeft = 60
var currentQuestionIndex = 0

//Arrays
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

  var highScoreList = []


//Functions
function hideButtons () {
  for (var i = 0; i <answer.length; i++) {
    answer[i].classList.add("hide");
  }
}

function showButtons () {
  for (var i = 0; i <answer.length; i++) {
    answer[i].classList.remove("hide");
  }

}

function loadScreen () {
  startBtn.classList.remove("hide");
  resetBtn.classList.add("hide");
  backBtn.classList.add("hide");
  for (var i = 0; i <answer.length; i++) {
    answer[i].classList.add("hide");
  }
  questionEl.textContent = "Coding Quiz Game"

}

function startGame () {
    startBtn.classList.add("hide");
    setTime ()
    showQuestion()
}

function resetGame () {
  console.log("the reset button works")  
  questionEl.textContent = "Play again?"
    resetBtn.classList.add("hide");
    backBtn.classList.add("hide");
    startBtn.classList.remove("hide");
    console.log(answer)
    for (var i = 0; i <answer.length; i++) {
      answer[i].classList.add("hide");
    }

}

function viewScores () {
  console.log("the view scores button works") 
  startBtn.classList.add("hide");
  resetBtn.classList.add("hide");
  backBtn.classList.remove("hide");
  questionEl.textContent = "This page isn't technically required by the AC and I ran out of time ಥ_ಥ"
hideButtons()
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = "Time Left: " + secondsLeft;
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
       
      }
  
    }, 1000);
  }

  function gameOver () {
    questionEl.textContent = "Game Over" 
    hideButtons ()
    form.classList.remove("hide");
    scoreField.textContent = "Score: " + secondsLeft
  }

  function showQuestion() {
    wrongMsg.classList.add("hide");
    correctMsg.classList.add("hide");
    questionEl.textContent = questions[currentQuestionIndex].question

      console.log(questionEl)
      showButtons ()

    for (var i = 0; i < 4; i++)  {
      myButtons[i].textContent = questions[currentQuestionIndex].answers[i].text
    }
    if (currentQuestionIndex === 4){
      gameOver()
    }
  }

  function isCorrect () {
    console.log (this.getAttribute("id"))
    
    if (questions[currentQuestionIndex].answers[this.getAttribute("id") - 1].correct) {
      console.log ('thats correct')
      correctMsg.classList.remove("hide");
      
    }
    else {
      console.log("that's wrong")
      wrongMsg.classList.remove("hide");
      secondsLeft -=5
    }
    
    var delay = 1;
    var delayTimer = setInterval(function() {
      delay--;
      if (delay === 0){
        clearInterval(delayTimer);
        currentQuestionIndex +=1
        showQuestion()
      }
    }, 1000);
  }



 
    function saveInitials () {
      // var currentScore = {
      //   initials: // however you get the initials,
      //   score: secondsLeft
      // }

      // get the existing scores from local storage (put them into an array) don't forget JSON.parse
      // add (push) currentScore to that array
      // save the array of scores back to local storage - don't forget to stringify
  
      // var scores = {
      //   score = score.value,
      //   savedInitials = 
      // }

    }



//Listeners
addEventListener("load", loadScreen)
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
highScore.addEventListener("click", viewScores);
backBtn.addEventListener("click", loadScreen);
btn1.addEventListener("click", isCorrect);
btn2.addEventListener("click", isCorrect);
btn3.addEventListener("click", isCorrect);
btn4.addEventListener("click", isCorrect);
submitBtn.addEventListener("click", loadScreen);