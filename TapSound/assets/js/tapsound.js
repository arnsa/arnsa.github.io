var soundsDir = 'assets/sounds/';
var sounds = {
    97: soundsDir + "bubbles.mp3",
    98: soundsDir + "bubbles.mp3",
    99: soundsDir + "clay.mp3",
    100: soundsDir + "confetti.mp3",
    101: soundsDir + "corona.mp3",
    102: soundsDir + "dotted-spiral.mp3",
    103: soundsDir + "flash-1.mp3",
    104: soundsDir + "flash-2.mp3",
    105: soundsDir + "flash-3.mp3",
    106: soundsDir + "glimmer.mp3",
    107: soundsDir + "moon.mp3",
    108: soundsDir + "pinwheel.mp3",
    109: soundsDir + "piston-1.mp3",
    110: soundsDir + "piston-2.mp3",
    111: soundsDir + "piston-3.mp3",
    112: soundsDir + "prism-1.mp3",
    113: soundsDir + "prism-2.mp3",
    114: soundsDir + "prism-3.mp3",
    115: soundsDir + "splits.mp3",
    116: soundsDir + "squiggle.mp3",
    117: soundsDir + "strike.mp3",
    118: soundsDir + "suspension.mp3",
    119: soundsDir + "timer.mp3",
    120: soundsDir + "ufo.mp3",
    121: soundsDir + "veil.mp3",
    122: soundsDir + "wipe.mp3",
    123: soundsDir + "zig-zag.mp3"
};

$("body").on("keypress", function(event) {
    playCircle(sounds[event.which]);
});

function removeCircle() {
    if($(".circle").length > 0) {
        $(".circle:first-of-type").remove();
    }
}

function playSound(sound) {
    var snd = new Audio(sound);
    snd.currentTime = 0;
    snd.play();
}

function playAnimation() {
    $("body").append("<div class=\"circle\"></div>");
    $(".circle:last-of-type").css({
        "backgroundColor": randomColor(),
        "top": randomPosition()[0],
        "left": randomPosition()[1]
    });
}

function playCircle(sound) {
    playSound(sound);
    playAnimation();
    setTimeout(removeCircle, 700);
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomPosition() {
    var top = Math.floor(Math.random() * 600);
    var left = Math.floor(Math.random() * 1200);
    return [top, left];
}
