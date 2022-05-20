/* Generating Random number for both dices */
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

/* Checking for Winner */
if (random1 === random2) {
    document.getElementById("wins").innerHTML = "Draw!";
} else if (random1 > random2) {
    document.getElementById("wins").innerHTML = "Player 1 Wins!";
} else {
    document.getElementById("wins").innerHTML = "Player 2 Wins!";
}

/* Setting images according to random numbers */
document.querySelector(".img1").setAttribute("src", "/images/dice" + random1 + ".png");
document.querySelector(".img2").setAttribute("src", "/images/dice" + random2 + ".png");