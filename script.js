// USE CASE


// 2. Once the user begins the game have a countdown timer and their question progress

// 3. When a user answers a question move on to the next one
// when the user is correct don't subtract time, and add 1 to their score. 
// else subtract 5 seconds
// 4. When timer === 0 or questionsRemaining === 0 end the game with.
// 5. When the game is over allow the User to save their initials with their
//    score. Order the scores from highest to lowest.

// VARIABLES
var score = 0;
var currentQuestion = 0;
var question = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
var answers = [
    ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
];
var correctAnswer = [1, 3, 2, 0, 1];
//referencing the specific answers:
//answers[3][3] = Answer 4 of Question 4
var timeRemaining = document.getElementById("time-remaining");


// Functions
// countdown timer on click start


function startGame() {


countdownTimer();
    
}
function answersAppear(){
    // have Start button disappear
    
}
function countdownTimer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeRemaining.textContent = timeLeft;
        

        if (timeLeft === 0) {
            timeRemaining.textContent = "";
            // endGame function
            clearInterval(timeInterval);
        }
        timeLeft--;
    }, 1000);


}
// function toggleScreen(){
//     var mainMenu = document.getElementById("start");
//     var inGame = document.getElementById("question-number");

//     var mainMenuToggle = mainMenu.style.display;
//     var inGameToggle = inGame.style.display;

//     if(mainMenuToggle=='block' && startGame()){
//         inGameToggle = 'block';
//         mainMenuToggle = 'none';
//     }else mainMenuToggle = 'block';
//         inGameToggle = 'none';

// }
function displayCurrentQuestion(){
var questionNumber = question[currentQuestion];
var displayQuestionHere = document.getElementById("text-area");
displayQuestionHere.textContent = questionNumber.title;


}
// ?? First, question needs to go to next question after they answer question. (repeat until time===0 || question[i]<question[10])
    // check if correct asnwer === their answer
        // yes, next question add 1 to score
        // else, -5 seconds and next question







// function endGame(){}
// this function will lead to an opening of the top-scores.html file and displaying the scores from high to low using local storage




// EVENT LISTENERS
//  on start click start the countdown timer
// on key pressed display their initials
// on click answer compare their answer to the correct answer


