var viewScores = document.querySelector(".viewScores");
var timer = document.querySelector(".timer");
var questions = document.querySelector(".questions");
var choices = document.querySelector(".choices");
var startBtn = document.querySelector(".startBtn");
var notes = document.querySelector(".notes");

var timeRemaining = 60;
var questionNum = 0;



// questions and answers sets
var questionLoop = [{
    content: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer:"alerts",
},{
    content: "The condition in an if/else statement is enclosed with _______",
    options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer:"curly brackets",
},{
    content: "Which is the following methods is used to store an object to the local storage?",
    options: ["JSON.stringify()", "JONSON.stringify()", "JSON.spotify()", "JSON.parse()"],
    correctAnswer:"JSON.stringify()",
},{
    content: "The document method: querySelector() is to return ______ Element(s) that matches the specified selector, or group of selectors.",
    options: ["the first", "all", "the last", "the second"],
    correctAnswer:"the first",
},{
    content: "which of the followings is a class selector to set the class attribute in CSS",
    options: [".class{}", "#class{}", "var class = ''", "function(class) = {}"],
    correctAnswer:".class{}",
}]


// startButton event
startBtn.addEventListener("click", function(){
    timerStart()
    choices.removeAttribute("hidden");

    for (var i=0; i < 4; i++) {
        var emptyBtn = document.createElement ("button");
        emptyBtn.setAttribute("value", "");
        choices.appendChild (emptyBtn);
    };

    startBtn.setAttribute("hidden","true");
    notes.textContent = "";

    moreQuestions()
})

// quetsion loop function starts here, achieving auto switching to the next questions when condition meets
function moreQuestions() {
    questions.textContent = questionLoop[questionNum].content;
    for (var i=0; i < questionLoop[questionNum].options.length; i++) {
        choices.children[i].value = questionLoop[questionNum].options[i];
        choices.children[i].textContent= i+1 +". " + choices.children[i].value;
    };
    choices.addEventListener("click", pickAnswer);
}

function pickAnswer (event){
    var chosen= event.target;
   
    if (chosen.value === questionLoop[questionNum].correctAnswer) {
        notes.textContent="Your answer is CORRECT!";
        setTimeout(function(){
            questionNum++;
            notes.textContent = "";
            choices.removeEventListener("click", pickAnswer);
            moreQuestions(); 
        },1000);
    } else {
        timeRemaining = timeRemaining-15;
        notes.textContent="Your answer is WRONG!";
        pickAnswer();
    }    
    
}



// Timer function
function timerStart(){
    var counting = setInterval(function(){
        timeRemaining--;
        timer.textContent = timeRemaining;

        if (timeRemaining < 0 || timeRemaining ===0){
            clearInterval(counting);
            gameOver();
        }
        
    },1000);
}

function gameOver(){
    questions.textContent = "Time is up, try harder next time!";
    notes.textContent = "Please reload the page to restart.";
    choices.setAttribute("hidden","true");
}
// console.log (questionNum);