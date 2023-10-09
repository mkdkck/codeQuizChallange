// declare highScores to a value in the localStorage or to a array if it is null
var highScores=JSON.parse(localStorage.getItem("highScore")) || [];
var hsList = document.querySelector("#highscores");
var newScores = JSON.parse(localStorage.getItem("newScore")); 

if (highScores === null) {
  highScores = newScores;
} else if (newScores === null){
  } else {
  highScores.push(newScores);
};
localStorage.setItem ("highScore",JSON.stringify(highScores));

if (highScores === undefined) {
  } else {
    highScores.sort((a,b) => b.sec - a.sec);

function printHighscores() {
// sort highscores by score property in descending order
  for (var i = 0; i < highScores.length; i += 1) {
  var list = document.createElement("li");
  list.innerHTML = highScores[i].int +"---"+ highScores[i].sec + " Points";
  hsList.appendChild (list);
  } 
};  
localStorage.removeItem("newScore");
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