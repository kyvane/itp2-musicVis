function Spectrum() {
    this.name = "spectrum";

    this.draw = function () {
        push();
        var spectrum = fourier.analyze();
        noStroke();

        var c1 = color(70, green, 70);
        var c2 = color(70, 70, blue);
        var c3 = color(red, 70, 70);

        for (var i = 0; i < spectrum.length; i++) {
            var c127 = lerpColor(c1, c2, spectrum[i] / 127);
            var c255 = lerpColor(c2, c3, 127 + spectrum[i] / 255);
            var c = lerpColor(c127, c255, spectrum[i] / 255);
            fill(c);

            var x = map(i, 0, spectrum.length, 0, width + 200);
            var h = -height + map(spectrum[i], 0, 255, height, 0);

            rect(x + width / 2, height / 2 + 200, width / spectrum.length + 2, h);
            rect(-x + width / 2, height / 2 + 200, width / spectrum.length + 2, h);
            
            // reflecting spectrum
            rect(x + width / 2, height / 2 + 200, width / spectrum.length + 2, -h / 4);
            rect(-x + width / 2, height / 2 + 200, width / spectrum.length + 2, -h / 4);
        }

        pop();
    };

    this.unSelectVisual = function () {};

    this.selectVisual = function () {};
}
