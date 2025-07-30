// displays and handles clicks on the playback button.
function PlaybackButton() {
    // position
    this.x = width / 2 - 10;
    this.y = height / 2 + 280;

    // size
    this.width = 20;
    this.height = 20;

    // determines state
    this.playing = false;

    this.draw = function () {
        fill(255);
        noStroke();

		if (this.playing == true) {
            rect(this.x, this.y, this.width / 2 - 2, this.height);
            rect(this.x + (this.width / 2 + 2), this.y, this.width / 2 - 2, this.height);
        } else {
            triangle(this.x, this.y, this.x + this.width, this.y + this.height / 2, this.x, this.y + this.height);
        }
    };

    this.hitCheck = function () {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            return true;
        }
        return false;
    };
}
