function Particle(x, y, colour, angle, speed) {
    var x = x;
    var y = y;
    var colour = colour;
    var angle = angle;

    this.speed = speed;

    this.draw = function () {
        update();
        noStroke();

        var red = random(0, 255);
        var green = random(0, 255);
        var blue = random(0, 255);
        colour = red, green, blue;
        
        push();
        fill(red, blue, green, 80);
        let level = amplitude.getLevel();
        let d = map(level, 0.0, 1.0, 150, 2000) * 0.1;
        ellipse(x, y, d, d);
        pop();
    };

    function update() {
        this.speed -= 0.6;
        x += cos(angle) * speed;
        y += sin(angle) * speed;
    }
}
