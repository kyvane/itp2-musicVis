function nextSong() {
    this.x = width / 2 + 70;
    this.y = height / 2 + 284;
    this.width = 14;
    this.height = 14;

    this.draw = function () {
        fill(255);
        noStroke();
        triangle(this.x, this.y, this.x + this.width, this.y + this.height / 2, this.x, this.y + this.height);
        triangle(this.x + 7, this.y, this.x + this.width + 7, this.y + this.height / 2, this.x + 7, this.y + this.height);
    };

    this.hitCheck = function(){
        if (mouseX > this.x && mouseX < this.x + 7 + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            if (sound.isPlaying()) {
                sound.pause();
            } else {
                sound.loop();
            }
            this.playing = !this.playing;
        }
        return false;
    }
}

function previousSong() {
    this.x = width / 2 - 80;
    this.y = height / 2 + 284;
    this.width = -14;
    this.height = 14;

    this.draw = function () {
        fill(255);
        noStroke();
        triangle(this.x, this.y, this.x + this.width, this.y + this.height / 2, this.x, this.y + this.height);
        triangle(this.x - 7, this.y, this.x + this.width - 7, this.y + this.height / 2, this.x - 7, this.y + this.height);
    };

    this.hitCheck = function () {};
}
