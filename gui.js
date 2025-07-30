var reflect = false;
var drawFill = true;

function myGUI() {
    // color changer gui for visualiser
    red = 0;
    green = 223;
    blue = 255;
    gui = createGui("Color changer").setPosition(width - 220, 20);
    sliderRange(0, 255, 1);
    gui.addGlobals("red", "green", "blue");

    // color changer gui for background color
    bgRed = 25;
    bgGreen = 25;
    bgBlue = 25;
    gui = createGui("Background color").setPosition(width - 220, 220);
    sliderRange(0, 255, 1);
    gui.addGlobals("bgRed", "bgGreen", "bgBlue");
}
