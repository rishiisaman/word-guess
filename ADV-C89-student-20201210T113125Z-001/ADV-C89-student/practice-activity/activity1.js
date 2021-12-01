function updateScore(){
    score = score + 1;
    document.getElementById("score").innerHTML = "score:" + score;
}
function saveScore(){
    localStorage.setItem("score", score);
}
function Nextpage(){
window.location ="activity_2.html";
}