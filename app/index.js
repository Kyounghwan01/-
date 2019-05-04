// Load application styles
import 'styles/index.css';

var holes = document.querySelectorAll('.hole');

var latesthole;

var score = 100;

var randomNumber = 0;

var isReady=false;

var interval;

var popUpClass = "popUp";

var text = document.getElementsByClassName("scoreboard").textContent;

document.getElementById("scoreboard").textContent = score;

var resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click",resetGame);

var startbtn = document.getElementById("startbtn");
startbtn.addEventListener("click",start);

var stopbtn = document.getElementById("stopbtn");
stopbtn.addEventListener("click",stop);



function start(){
    interval=setInterval(function(){raiseMole();},1000);
    if(randomNumber+1===4){
        updateScore();
    }
}

function stop(){    
    clearInterval(interval);
    document.querySelector(`.${popUpClass}`).classList.remove(popUpClass);
}

function updateScore(){
    score += 10;
    document.getElementById("scoreboard").textContent = score;
}



function resetGame(){
    score=0;
    document.getElementById("scoreboard").textContent = score;
}

//setInterval(function(){raiseMole();},1000);


function raiseMole(){
    randomNumber = Math.floor(Math.random() * holes.length);
    var hole=holes[randomNumber];
    isReady=true;
    //console.log(isReady);
    //console.log(hole);
    if(hole === latesthole){
        console.log("중복, 다시실행"); 
        return raiseMole();
    }
    function popUpMole(){
        var popUp = document.querySelector(`.${popUpClass}`);
        //console.log(popUp);
        if(isReady){
            popUp.classList.remove(popUpClass);
            var nextPopUp = hole
            nextPopUp.classList.add(popUpClass);
        }
    }
    popUpMole();
    latesthole = hole;
    // if(isReady){
        
    // }
    isReady=false;
}




//setTimeout("history.go(0);", 10);
