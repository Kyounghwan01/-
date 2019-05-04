// Load application styles
import "styles/index.css";

var holes = document.querySelectorAll(".hole");

var popUpClass = "popUp";

var disClass = "dis";

var visibilityStartBtn = "visibilityStartBtn";

var score = 1000;

var randomNumber = 0;

var count = 0;

var isReady = false;

var interval;

var latesthole;


//var text = document.getElementsByClassName("scoreboard").textContent;

function scoreboard(){document.getElementById("scoreboard").textContent = score;}

var resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click", resetGame);

var startbtn = document.getElementById("startbtn");
startbtn.addEventListener("click", start);

var stopbtn = document.getElementById("stopbtn");
stopbtn.addEventListener("click", stop);


function start() {
    score = 0;
    count = 0;
    document.querySelector(`.${visibilityStartBtn}`).style.display = "none";
    scoreboard();
    setTimeout(function(){
        raiseMole();
        interval = setInterval(function(){
            raiseMole();
            console.log(count);
            if(count === 3){
                clearInterval(interval);
                document.querySelector(`.${popUpClass}`).classList.remove(popUpClass);
                document.querySelector(`.${disClass}`).style.visibility = 'visible';
            }
        }, 1000)
    }, 1000)
}

function stop() {
  clearInterval(interval);
  document.querySelector(`.${popUpClass}`).classList.remove(popUpClass);
  document.querySelector(`.${visibilityStartBtn}`).style.display = "block";
  count = 0;
  isReady = false;
}

function upScore() {
  score += 10;
  scoreboard();
}

function resetGame() {
  count = 0;
  document.querySelector(`.${disClass}`).style.visibility = 'hidden';
  start();
}

function raiseMole() {
  isReady = true;
  randomNumber = Math.floor(Math.random() * holes.length);
  var hole = holes[randomNumber];

  //console.log(isReady);
  //console.log(hole);
  if (hole === latesthole) {
    console.log("중복, 다시실행");
    return raiseMole();
  }
  function popUpMole() {
    var popUp = document.querySelector(`.${popUpClass}`);
    //console.log(popUp);
    if (isReady) {
      if (popUp !== null) {
        popUp.classList.remove(popUpClass);
        var nextPopUp = hole;
        nextPopUp.classList.add(popUpClass);
      } else {
        var nextPopUp = hole;
        nextPopUp.classList.add(popUpClass);
      }
    }
  }
  popUpMole();
  isReady = false;
  count += 1;
}



//setTimeout("history.go(0);", 10);
