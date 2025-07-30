var fireworks;

function addFireworks() {
    this.name = "Fireworks";

    this.draw = function () {
        spectrum = fourier.analyze();

        if (beatDetect.detectBeat(spectrum) == true) {
            fireworks.addFirework();
        }

        fireworks.update();
    };
}

function Firework(x, y) {
    var x = x;
    var y = y;

    var particles = [];
    this.depleted = false;

    for (var i = 0; i < 360; i += 10) {
        particles.push(new fireworkParticle(x, y, i, 8));
    }

    this.draw = function () {
        for (var i = 0; i < particles.length; i++) {
            particles[i].draw();
        }
        if (particles[0].speed <= 0) {
            this.depleted = true;
        }
    };
}

function Fireworks() {
    var fireworks = [];

    this.addFirework = function () {
        var f_x = random(width * 0.3, width * 0.8);
        var f_y = random(height * 0.3, height * 0.8);

        fireworks.push(new Firework(f_x, f_y));
    };

    this.update = function () {
        for (var i = 0; i < fireworks.length; i++) {
            fireworks[i].draw();
            if (fireworks[i].depleted) {
                fireworks.splice(i, 1);
            }
        }
    };
}

function fireworkParticle(x, y, angle, speed) {
    var x = x;
    var y = y;
    var angle = angle;
    var originX = x;
    var originY = y;

    this.speed = speed;

    this.draw = function () {
        update();
        noStroke();

        // make particles fade after certain distance using alpha value
        this.distance = dist(originX, originY, x, y);
        let alpha = map(this.distance, 0, 300, 255, 0);
        
        fill(red, blue, green, alpha);
        ellipse(x, y, 20, 20);
    };

    function update() {
        this.speed -= 0.6;
        x += cos(angle) * speed;
        y += sin(angle) * speed;
    }
}
