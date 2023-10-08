// declare highScores to a value in the localStorage or to a array if it is null
var highScores=JSON.parse(localStorage.getItem("highScore")) || [];
var hsList = document.querySelector("#highscores");
var newHighScores;

function printHighscores() {
  var newHighScores = JSON.parse(localStorage.getItem("newScore")); 

  if (highScores == null) {
    highScores = newHighScores;
  } else {
    highScores.push(newHighScores);
  };
  localStorage.setItem ("highScore",JSON.stringify(highScores));

// sort highscores by score property in descending order
  highScores.sort((a,b) => b.sec - a.sec);

  for (var i = 0; i < highScores.length; i += 1) {
    var list = document.createElement("li");
    list.innerHTML = highScores[i].int +"---"+ highScores[i].sec + "Points";
    hsList.appendChild (list);
  }
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