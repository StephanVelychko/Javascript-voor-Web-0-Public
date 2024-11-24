let buttonLeft = document.getElementById("LEFT");
let buttonRight = document.getElementById("RIGHT");
let buttonUp = document.getElementById("UP");
let buttonDown = document.getElementById("DOWN");
let leftPos = 690;
let upPos = 360;
let step = 20;
let koe = document.getElementById("cow");
buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);
buttonUp.addEventListener("click", moveUp);
buttonDown.addEventListener("click", moveDown);

function moveLeft() {
	leftPos -= step;
	koe.style.left = leftPos + "px";
}
function moveRight(){
	leftPos += step;
	koe.style.left = leftPos + "px";
}
function moveUp(){
	upPos -= step;
	koe.style.top = upPos + "px";
}
function moveDown(){
	upPos += step;
	koe.style.top = upPos + "px";
}