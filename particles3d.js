var particles;
var particles = [];

function particles3d() {
    this.name = "3D Particles";

    this.draw = function () {
        spectrum = fourier.analyze();

        image(pg, 0, 0, width, height);

        pg.push();
        pg.clear();
        pg.background(bgRed, bgBlue, bgGreen);

        // creates camera movement
        pg.translate(-width / 4, -height / 4, sin(frameCount) * 100);

        if (beatDetect.detectBeat(spectrum) == true) {
            var p = new Particles();
            particles.push(p);
        }
        
        for (var i = particles.length - 1; i >= 0; i--) {
            if (dist(particles[i].pos.x, particles[i].pos.y, particles[i].pos.z, 0, 0, 0 < 500)) {
                particles[i].update();
                particles[i].show();
            } else {
                particles.splice(i, 1);
            }
        }

        // draws circle in the middle that pulsates to amplitude
        stroke(red, blue, green);
        fill(bgRed, bgBlue, bgGreen);
        let level = amplitude.getLevel();
        let d = map(level, 0.0, 1.0, 150, 2000) + 20;
        ellipse(width / 2, height / 2, d, d);

        pg.pop();
    };
}

function Particles() {
    this.pos = createVector(0, 0, 0);
    this.vel = p5.Vector.random3D().normalize().mult(random(1, 6));

    this.update = function () {
        this.pos.add(this.vel);
    };

    this.show = function () {
        pg.push();
        pg.noStroke();
        pg.fill(red, blue, green);
        pg.translate(this.pos.x, this.pos.y, this.pos.z);
        pg.sphere(4);
        pg.pop();
    };
}
