var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomDiceImg = "dice" + randomNumber1 +".png";
var randomDiceSrc = "images/" + randomDiceImg;
document.querySelector(".img1").setAttribute("src",randomDiceSrc);
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1 ;
randomNumber2 = Math.floor(randomNumber2);
var randomDiceImg2 = "dice" + randomNumber2 +".png";
var randomDiceSrc2 = "images/" + randomDiceImg2;
document.querySelector(".img2").setAttribute("src",randomDiceSrc2);
console.log(randomNumber2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="Draw!";
}
