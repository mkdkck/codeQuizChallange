// declare highScores to a value in the localStorage or to a array if it is null
var highScores=JSON.parse(localStorage.getItem("highScore")) || [];
var hsList = document.querySelector("#highscores");
var newScores = JSON.parse(localStorage.getItem("newScore")); 

//initialize the high score array, prevent pushs null value from the newScore into the highScores array.
if (highScores === null) {
  highScores = newScores;
} else if (newScores === null){
  } else {
  highScores.push(newScores);
};

// set new records into the highScore, and remove newScore value to prevent refreshing page adding the same value back to the highScore array.
localStorage.setItem ("highScore",JSON.stringify(highScores));
localStorage.removeItem("newScore");

//prevent the error message when there is no value in highScores array.
// sort highscores by score property in descending order
if (highScores === undefined) {
  } else {
    highScores.sort((a,b) => b.sec - a.sec);

function printHighscores() {
  for (var i = 0; i < highScores.length; i += 1) {
  var list = document.createElement("li");
  list.innerHTML = highScores[i].int +"---"+ highScores[i].sec + " Points";
  hsList.appendChild (list);
  } 
};
}

// clear the whole list and clear the localStorage
function clearHighscores() {
  while (hsList.firstChild) {
    hsList.removeChild(hsList.firstChild);
  }
  localStorage.clear();
}

document.getElementById("clear").onclick = clearHighscores;

printHighscores();