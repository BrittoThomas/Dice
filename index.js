var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var imageSrc1 = "images/dice1.png";
var imageSrc2 = "images/dice1.png";
switch (randomNumber1) {
  case 1:
    // code block
    imageSrc1 = "images/dice1.png";
    break;
  case 2:
    // code block
    imageSrc1 = "images/dice2.png";
    break;
  case 3:
    // code block
    imageSrc1 = "images/dice3.png";
    break;
  case 4:
    // code block
    imageSrc1 = "images/dice4.png";
    break;
  case 5:
    // code block
    imageSrc1 = "images/dice5.png";
    break;
  case 6:
    // code block
    imageSrc1 = "images/dice6.png";
    break;
  default:
    break;
}

switch (randomNumber2) {
  case 1:
    // code block
    imageSrc2 = "images/dice1.png";
    break;
  case 2:
    // code block
    imageSrc2 = "images/dice2.png";
    break;
  case 3:
    // code block
    imageSrc2 = "images/dice3.png";
    break;
  case 4:
    // code block
    imageSrc2 = "images/dice4.png";
    break;
  case 5:
    // code block
    imageSrc2 = "images/dice5.png";
    break;
  case 6:
    // code block
    imageSrc2 = "images/dice6.png";
    break;
  default:
    break;
}

document.querySelector(".img1").src = imageSrc1
document.querySelector(".img2").src = imageSrc2

var winnerTitle = "Refresh";
if (randomNumber1 === randomNumber2) {
  winnerTitle = "Draw";
}else if (randomNumber1 > randomNumber2) {
  winnerTitle = "Player 1 Win";
}else {
  winnerTitle = "Player 2 Win";
}

document.querySelector("h1").innerHTML = winnerTitle;
