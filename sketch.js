//global for the controls and input
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;
var fireworks;
var amplitude;

function preload() {
    // sound = loadSound("assets/stomper_reggae_bit.mp3");
    sound = loadSound("assets/amalgam-rockot.mp3");
    // sound = loadSound("assets/nightfall-future-bass-music-soulprodmusic.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    pg = createGraphics(windowWidth, windowHeight, WEBGL)
    background(0);
    controls = new ControlsAndInput();
    myGUI = new myGUI();

    frameRate(60);
    beatDetect = new BeatDetect();
    fireworks = new Fireworks();
    angleMode(DEGREES);

    fourier = new p5.FFT();
    amplitude = new p5.Amplitude();

    vis = new Visualisations();
    vis.add(new Spectrum());
    vis.add(new Circular());
    vis.add(new Ridge());
    vis.add(new addFireworks());
    vis.add(new particles3d())
}

function draw() {
    background(bgRed, bgGreen, bgBlue);;
    push();
    vis.selectedVisual.draw();
    pop();
    controls.draw();
}

function mouseClicked() {
    controls.mousePressed();
}

function keyPressed() {
    controls.keyPressed(keyCode);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    if (vis.selectedVisual.hasOwnProperty("onResize")) {
        vis.selectedVisual.onResize();
    }
}
