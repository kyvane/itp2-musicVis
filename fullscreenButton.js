function fullscreenButton() {
    this.x = width / 2 + 200;
    this.y = height - 70;

    this.width = 22;
    this.height = 20;

    this.playing = false;

    this.draw = function () {
        fill(255);
        noStroke();

        rect(this.x, this.y, this.width / 4 - 2, this.height/2 - 2);
        rect(this.x, this.y, this.width / 2 - 2, this.height/4 - 2);

        rect(this.x+18, this.y, this.width / 4 - 2, this.height/2 - 2);
        rect(this.x+12, this.y, this.width / 2 - 2, this.height/4 - 2);
        
        rect(this.x, this.y+12, this.width / 4 - 2, this.height/2 - 2);
        rect(this.x, this.y+17, this.width / 2 - 2, this.height/4 - 2);

        rect(this.x+18, this.y+12, this.width / 4 - 2, this.height/2 - 2);
        rect(this.x+12, this.y+17, this.width / 2 - 2, this.height/4 - 2);
    };

    this.hitCheck = function () {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            return true;
        }
        return false;
    };
}
