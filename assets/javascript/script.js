var viewScores = document.querySelector(".viewScores");
var timer = document.querySelector(".timer")
var questions = document.querySelector(".questions")
var choices = document.querySelector(".choices")
var startBtn = document.querySelector(".startBtn")
var notes = document.querySelector(".notes")
var timeRemaining = localStorage.getItem("timeRemaining")

// questions and answers sets
var q1 = {
    content: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer:"3. alerts",
}
var q2 = {
    content: "The condition in an if/else statement is enclosed with _______",
    options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer:"2. curly brackets",
}
var q3 = {
    content: "Which is the following methods is used to store an object to the local storage?",
    options: ["JSON.stringify()", "JONSON.stringify()", "JSON.spotify()", "JSON.parse()"],
    correctAnswer:"1. JSON.stringify()",
}
var q4 = {
    content: "The document method: querySelector() is to return ______ Element(s) that matches the specified selector, or group of selectors.",
    options: ["the first", "all", "the last", "the second"],
    correctAnswer:"1. the first",
}
var q5 = {
    content: "which of the followings is a class selector to set the class attribute in CSS",
    options: [".class{}", "#class{}", "var class = ''", "function(class) = {}"],
    correctAnswer:"1. .class{}",
}
var questionLoop = [q1,q2,q3,q4,q5]


// startButton event
startBtn.addEventListener("click", function(){
    timerStart()
    var questionNum = 0
    localStorage.setItem ("questionNum", questionNum)
    var timeRemaining = 60
    localStorage.setItem ("timeRemaining", timeRemaining)

    startBtn.setAttribute("hidden","true");
    notes.textContent = "";

    moreQuestions()
})

// quetsion loop function starts here, achieving auto switching to the next questions when condition meets
function moreQuestions() {
    var questionNum = localStorage.getItem("questionNum")

    for (var i=0; i < questionLoop[questionNum].options.length; i++) {
        questions.textContent = questionLoop[questionNum].content;
        var aLists = document.createElement ("button");
        aLists.textContent= i+1 +". " + questionLoop[questionNum].options[i];
        choices.appendChild (aLists);
    };

    choices.addEventListener("click", function(event){
        var chosen= event.target;
        
        if (chosen.innerHTML == questionLoop[questionNum].correctAnswer) {
            notes.textContent="Correct!";
            questionNum++;
            localStorage.setItem("questionNum", questionNum);
            moreQuestions();
        } 
    })

    }
    


// Timer function
function timerStart(){
    var counting = setInterval(function(){
        timeRemaining--;
        timer.textContent = timeRemaining;

        if (timeRemaining === 0){
            clearInterval(counting);
            gameOver();
        }

    },1000)
}

// function gameOver(){

// }
// console.log (questionNum);





