var difficulty = 6;
var squares = document.querySelectorAll(".square");
var colors;
var pickedColor;
var header = document.querySelector("header h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector("#messageDisplay");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            for(var j = 0; j < modeButtons.length; j++)
                modeButtons[j].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? difficulty = 3: difficulty = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                header.style.background = clickedColor;
            } else {
                this.style.pointerEvents = 'none';
                this.style.background = "#232323";
                this.style.border = "none";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++)
        squares[i].style.background = color;
}

function generateRandomColors() {
    var colors = [];

    for(var i = 0; i < difficulty; i++)
        colors[i] = randomColor();

    return colors;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickRandomColor() {
    return colors[Math.floor(Math.random() * difficulty)];
}

function enableSquares() {
    for(var i = 0; i < squares.length; i++)
        squares[i].style.pointerEvents = 'auto';
}

function reset() {
    messageDisplay.textContent = '';
    resetButton.textContent = "New colors";
    header.style.backgroundColor = "#4482B6";
    colors = generateRandomColors();

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "inline-block"
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.border = "none";
            squares[i].style.display = "none";
        }
    }

    enableSquares();
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
}

resetButton.addEventListener("click", reset);
