// Load application styles
import "styles/index.css";

var holes = document.querySelectorAll(".hole"),
  score = 0,
  count = 0,
  visibilityStartBtn = "visibilityStartBtn",
  popUpClass = "popUp",
  disappear,randomNumber,prevHole,
  disClass = "dis",
  startbtn = document.getElementById("startbtn"),
  stopbtn = document.getElementById("stopbtn"),
  resetbtn = document.getElementById("resetbtn");

startbtn.addEventListener("click", start);
stopbtn.addEventListener("click",stop);
resetbtn.addEventListener("click", reset);

function scoreboard() {
  document.getElementById("scoreboard").textContent = score;
}

function stop(){
  count = 11;
  document.querySelector(`.${popUpClass}`).classList.remove(popUpClass);
  clearTimeout(disappear);
  document.querySelector(`.${disClass}`).style.visibility = 'visible';
}

function reset(){
  score = 0;
  count = 0;
  document.querySelector(`.${disClass}`).style.visibility = 'hidden';
  start();
}


function start() {
  score = 0;
  count = 0;
  document.querySelector(`.${visibilityStartBtn}`).style.display = "none";
  scoreboard();
  setTimeout(raiseMole, 1000);
}

function raiseMole() {
  if (count < 10) {
    count++;
    console.log(count);
    randomHole();
    disappear = setTimeout(disappearMole,3000);
  }else{
    document.querySelector(`.${disClass}`).style.visibility = 'visible';
  }
}

function disappearMole(){
  document.querySelector(`.${popUpClass}`).classList.remove(popUpClass);
  clearTimeout(disappear);
  setTimeout(raiseMole,1000);
}

function randomHole(){
  randomNumber = Math.floor(Math.random() * holes.length);
  var hole = holes[randomNumber];
  console.log(hole);
  if(hole === prevHole){
    return randomHole();
  }
  hole.classList.add("popUp");
  prevHole = hole;
  return hole;
}

function upScore(event){
  if(event.isTrusted === false) return;
  score = score+10;
  disappearMole();
  scoreboard();
  
  return;
}

for(var i in holes){
  holes[i].addEventListener("click",upScore);
}
