// Load application styles
import 'styles/index.css';

// ================================
// START YOUR APP HERE
// ================================

var scpre = 0;
function updateScore(){
    score += 10;
}

function resetGame(){
    score =0;

}
function raiseMole(){
    var randomNumber = Math.floor( (Math.random() * (9)) + 1 );
}

document.getElementById("scoreboard").textContent = "This is some text";
var text = document.getElementsByClassName("scoreboard").textContent;
// Math.floor( (Math.random() * (9)) + 1 ) 9까지 랜덤