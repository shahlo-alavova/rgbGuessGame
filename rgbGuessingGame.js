var colors = generateColorArray(6);
var colorSquares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var task = document.querySelector("#task");
var messageDisplay = document.querySelector("#message");
task.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var buttonsMode = document.querySelector(".mode");

for(var i=0;i<buttonsMode.length;i++){
	buttonsMode[i].addEventListener("click", function(){
		buttonsMode[0].classList.remove("selected");
		buttonsMode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3:numSquares=6;
	reset();
	});
}


function reset(){
    colors= generateColorArray(numSquares);
    pickedColor= pickColor();
	task.textContent = pickedColor;
	messageDisplay.textContent="";
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	for (var i = 0; i<colorSquares.length; i++){
		if(color[i]){
			colorSquares[i].style.display = "block";
colorSquares[i].style.backgroundColor = colors[i];
} else {
	colorSquares[i].style.display = "none";
}
}
pickedColor= pickColor();
task.textContent = pickedColor;
for (var i = 0; i< colorSquares.length; i++){
	if(colors[i]){
	colorSquares[i].style.backgroundColor = colors[i];
} else{
	colorSquares[i].style.display = "none";	
	}
}
};

// hardBtn.addEventListener("click", function(){
// easyBtn.classList.remove("selected");
// hardBtn.classList.add("selected");
// colors = generateColorArray(6);
// pickedColor= pickColor();
// task.textContent = pickedColor;
// for (var i = 0; i< colorSquares.length; i++){
// 	colorSquares[i].style.backgroundColor = colors[i];
// 	colorSquares[i].style.display = "block";}	
	
// });

resetButton.addEventListener("click", function(){
	reset();
}

for (var i = 0; i<colorSquares.length; i++){
colorSquares[i].style.backgroundColor = colors[i];
colorSquares[i].addEventListener("click", function() {
	var clickedColor = this.style.backgroundColor;
	console.log(clickedColor, pickedColor);
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again?";

	} else {
		this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again!";
	}
});
function changeColors(color){
	for(var i =0; i<colorSquares.length; i++){
		colorSquares[i].style.backgroundColor = color;
	}
}
}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateColorArray(num){
	var arr = []
	for (i = 0; i < num; i++){
    arr.push(generateColor());
	}
	return arr;
}

function generateColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red +", " + green + ", "+ blue + ")";
}