function generateSquares() {
    var square;
    var container = document.querySelector(".container");

    for(var i = 0; i < squares.length; i++)
        squares[i].remove();

    for(var i = 0; i < difficulty; i++) {
        square = document.createElement('div');
        square.className = "square";
        container.appendChild(square);
    }
    squares = document.querySelectorAll(".square");
}

function generateColors() {
    var RGB = [];
    var randomColor = Math.floor(Math.random() * difficulty);

    for(var i = 0; i < squares.length; i++) {
        for(var j = 0; j < 3; j++) {
            RGB[j] = Math.floor(Math.random() * 256);
        }
        squares[i].style.backgroundColor = "rgb(" +
        RGB[0] + "," + RGB[1] + "," + RGB[2] + ")";

        if(i === randomColor)
            document.querySelector("#colorDisplay").textContent = squares[i].style.backgroundColor;
    }
}

function disableSquares() {
    for(var i = 0; i < squares.length; i++)
        squares[i].style.pointerEvents = 'none';
}

function enableSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.pointerEvents = 'auto';
        squares[i].addEventListener("click", checkClickedSquare);
    }
}

function checkClickedSquare() {
    if(this.style.backgroundColor === document.querySelector("#colorDisplay").textContent) {
        disableSquares();
        message.textContent = "Correct!";
        document.querySelector("header").style.backgroundColor = this.style.backgroundColor;
        buttons.newColors.textContent = "Play again?";
    } else {
        message.textContent = "Wrong!";
    }
    this.style.backgroundColor = "#232323";
}

function newGame() {
    message.textContent = '';
    buttons.newColors.textContent = "New colors";
    document.querySelector("header").style.backgroundColor = "#4482B6";
    generateSquares();
    generateColors();
    enableSquares();
}

var difficulty = 6;
var squares = '';
var message = document.querySelector("#message");

var buttons = {
    newColors: document.querySelectorAll("button")[0],
    easy: document.querySelectorAll("button")[1],
    hard: document.querySelectorAll("button")[2]
};

buttons.newColors.addEventListener("click", newGame);

buttons.easy.addEventListener("click", function() {
    difficulty = 3;
    this.className = "selected";
    buttons.hard.className = "";
    newGame();
});

buttons.hard.addEventListener("click", function() {
    difficulty = 6;
    this.className = "selected";
    buttons.easy.className = "";
    newGame();
});

newGame();
