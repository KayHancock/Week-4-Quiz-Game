//Adding variables
var time = document.getElementById("timer");
var startBtn = document.getElementById("sbtn");
var resetBtn = document.getElementById("rebtn");
var answer = Array.from(document.querySelectorAll("#qbtn"));
var highScore = document.getElementById("view");
var questionEl = document.getElementById("q");
var secondsLeft = 30

//Questions
const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false },
        { text: '37', correct: false },
        { text: '8', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]


//Functions
function startGame () {
    startBtn.style.display = "none";
    shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
}

function resetGame () {
  console.log("the reset button works")  
  questionEl.textContent = "Play again?"
    resetBtn.style.display = "none";
    console.log(answer)
    answer.classList.add("hide");

    // if (answer.style.display === 'flex') {
    //     answer.style.display = 'none'
    // }
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = "Time Left: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // Calls function to create and append image
      }
  
    }, 1000);
  }


//Listeners
startBtn.addEventListener("click", setTime, startGame);
resetBtn.addEventListener("click", resetGame);