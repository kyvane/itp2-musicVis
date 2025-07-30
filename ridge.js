function Ridge() {
    this.name = "Ridge plots";

    var output = [];

    var startX = 0; // left
    var endY = -200; // top
    var startY = height + 200; // bottom
    var spectrumWidth = width; // width
    var speed = 5.5;

    this.addWave = function () {
        var w = fourier.waveform();
        var output_wave = [];

        // changes size of ridges
        var smallScale = 300;
        var bigScale = 300;

        for (var i = 0; i < w.length; i++) {
            if (i % 20 == 0) {
                var x = map(i, 0, 1024, startX, startX + spectrumWidth);
                if (i < 1024 * 0.25 || i > 1024 * 0.75) {
                    var y = map(w[i], -1, 1, -smallScale, smallScale);
                    output_wave.push({
                        x: x,
                        y: startY + y,
                    });
                } else {
                    var y = map(w[i], -1, 1, -bigScale, bigScale);
                    output_wave.push({
                        x: x,
                        y: startY + y,
                    });
                }
            }
        }
        output.push(output_wave);
    };

    this.draw = function () {
        let level = amplitude.getLevel();

        // background color offset
        let color = map(level, 0, 1, 0, 100);
        background(bgRed+ color, bgGreen + color, bgBlue + color);

        spectrum = fourier.analyze();

        // gives plot lines a drop shadow
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 10;
        drawingContext.shadowBlur = 50;
        drawingContext.shadowColor = "grey";

        noFill();
        stroke(red, green, blue);
        strokeWeight(2);

        if (frameCount % 10 == 0) {
            this.addWave();
        }

        for (var i = 0; i < output.length; i++) {
            var o = output[i];

            beginShape();

            for (var j = 0; j < o.length; j++) {
                o[j].y -= speed;
                // create pulses for the lines
                let level = amplitude.getLevel();
                let d = map(level, 0.0, 1.0, -5, 5) * 10;

                vertex(o[j].x, o[j].y + d);
            }

            endShape();

            if (o[0].y < endY) {
                output.splice(i, 1);
            }
        }
    };
}
