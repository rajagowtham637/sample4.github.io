

var velocityX = 10;
var velocityY = 20;
var positionX = 0;
var positionY = 0;
var maxX = 1300;
var minX = 0;
var direction = 0;

function bal() {
  if (direction) {
    positionX=positionX -velocityX;
    ball1.style.left = positionX + "px";
    if (positionX <= minX) direction = 0;
  } else {
    positionX=positionX + velocityX;
    ball1.style.left = positionX + "px";
    if (positionX >= maxX) direction = 1;
  }
}
setInterval(bal,10);

function hgs() {
  if (direction) {
    positionX=positionX -velocityX;
    ball2.style.left = positionX + "px";
    if (positionX <= minX) direction = 0;
  } else {
    positionX=positionX + velocityX;
    ball2.style.left = positionX + "px";
    if (positionX >= maxX) direction = 1;
  }
}
setInterval(hgs,10);

function hg() {
  if (direction) {
    positionX=positionX -velocityX;
    ball3.style.left = positionX + "px";
    if (positionX <= minX) direction = 0;
  } else {
    positionX=positionX + velocityX;
    ball3.style.left = positionX + "px";
    if (positionX >= maxX) direction = 1;
  }
}
setInterval(hg,10);
