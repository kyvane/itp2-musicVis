// reference: github.com/Ronik22/Audio-Visualizer/tree/main/examples/circular%20waveform%201

function Circular() {
    this.name = "Circular";

    this.cricularWaveform = function () {
        spectrum = fourier.analyze();
        amp = fourier.getEnergy(20, 200);

        stroke(red, green, blue);
        strokeWeight(3);
        noFill();

        // creates neon effect
        drawingContext.shadowBlur = 32;
        drawingContext.shadowColor = color(red, green, blue);

        var wave = fourier.waveform();

        translate(width / 2, height / 2);

        for (var t = -1; t <= 1; t += 2) {
            beginShape();

            // change i+= to change scatter
            for (var i = 0; i <= 180; i += 0.25) {
                var index = floor(map(i, 0, 180, 0, wave.length - 1));
                var r = map(wave[index], -0.1, 0.1, 90, 350);
                var x = r * sin(i) * t;
                var y = r * cos(i);
                point(x, y);
            }
            endShape();
        }
    };

    this.draw = function () {
        this.cricularWaveform();
    };
}
