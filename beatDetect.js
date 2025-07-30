var sampleBuffer = [];

function BeatDetect() {
    this.detectBeat = function (spectrum) {
        var sum = 0;
        var isBeat = false;

        for (var i = 0; i < spectrum.length; i++) {
            sum += spectrum[i];
        }

        if (sampleBuffer.length == 60) {
            // detects the beat
            var sampleSum = 0;

            for (var i = 0; i < sampleBuffer.length; i++) {
                sampleSum += sampleBuffer[i];
            }

            var sampleAverage = sampleSum / sampleBuffer.length;
            var c = constant(sampleAverage)

            if (sum > sampleAverage * c) {
                isBeat = true;
            }

            sampleBuffer.splice(0, 1);
            sampleBuffer.push(sum);
        } else {
            sampleBuffer.push(sum);
        }

        function constant(sampleAverage) {
            var varianceSum = 0;
            for (var i = 0; i < sampleBuffer.length; i++) {
                varianceSum += sampleBuffer[i] - sampleAverage;
            }

            var variance = varianceSum / sampleBuffer.length;
            var m = -0.15 / (25 - 200);
            var b = 1 + m * 200;

            return m * variance + b;
        }

        return isBeat;
    };
}
