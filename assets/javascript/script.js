var viewScores = document.querySelector(".viewScores");
var timer = document.querySelector(".timer");
var questions = document.querySelector(".questions");
var choices = document.querySelector(".choices");
var startBtn = document.querySelector(".startBtn");
var notes = document.querySelector(".notes");
var main = document.querySelector("#main");
var endPage = document.querySelector("#end-screen");
var score = document.querySelector("#final-score");
var submit = document.querySelector("#submit");
var input = document.querySelector("#initials");
var form = document.querySelector("#scoreForm");
var savedScore = [];

var timeRemaining = 60;
var questionNum = 0;
var counting;
var initials ={
    int: "",
    sec: "",};



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


// startButton event, create four blank buttons, hide start button, clear the notes section, starts the questions function.
startBtn.addEventListener("click", function(){
    timerStart()

    for (var i=0; i < 4; i++) {
        var emptyBtn = document.createElement ("button");
        emptyBtn.setAttribute("class","btn")
        emptyBtn.setAttribute("value", "");
        choices.appendChild (emptyBtn);
    };

    startBtn.setAttribute("class","hide");
    notes.textContent = "";

    moreQuestions();

});

// quetsion loop function starts here, achieving auto switching to the next questions when condition meets
function moreQuestions() {
    questions.textContent = questionLoop[questionNum].content;

    for (var i=0; i < questionLoop[questionNum].options.length; i++) {
        choices.children[i].value = questionLoop[questionNum].options[i];
        choices.children[i].textContent= i+1 +". " + choices.children[i].value;
    };
    
    pickAnswers();
}

// eventlistener linstening to the click event on buttons to see if the user choose the right or wrong answers.
function pickAnswers(){
    choices.addEventListener("click", function click(event){
        var chosen= event.target;

        if (chosen.value === questionLoop[questionNum].correctAnswer) {
            notes.textContent="Your answer is CORRECT!";
        } else {
            timeRemaining = timeRemaining-15;
            notes.textContent="Your answer is WRONG!";
        }
        setTimeout(function(){
            questionNum++;
            notes.textContent = "";
            choices.removeEventListener("click",click);
            if (questionNum === questionLoop.length) {
                scoreBoard();
            }else {
                moreQuestions();
            };
        },500);
    });
}

// Timer function
function timerStart(){
    counting = setInterval(function(){
        timeRemaining--;
        timer.textContent = timeRemaining;

        if (timeRemaining < 0 || timeRemaining === 0){
            clearInterval(counting);
            scoreBoard();
        }
    },1000);
}

function scoreBoard(){
    clearInterval(counting);
    timer.textContent = timeRemaining;
    main.setAttribute("class","hide");
    endPage.removeAttribute("class","hide");
    if (timeRemaining <= 0) {
        timer.textContent = 0;
        score.textContent = 0;
    } else {
        score.textContent = timeRemaining;
    }    
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (input.value === "") {
        window.alert ("Please type in your initials.");
    } else {
        saveScore();
    }
})

function saveScore() {
    initials.int = input.value;
    initials.sec = score.innerHTML;
    localStorage.setItem("newScore", JSON.stringify(initials));
    window.location.replace("highscores.html")
}

