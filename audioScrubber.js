

function audioScrubber() {
    slider = createSlider(0, 100, 0);
    slider.position(width / 2 - 200, 700);
    slider.size(400);

    soundLength = sound.duration();
    print("ay" + soundLength);

    this.drawScrub = function(){
        sliderVal1 = slider.value();
        soundLen = sound.duration();
        print(soundLen);
        soundPos = map(sliderVal1, 10, 390, 0, soundLen);
        slider.value(map(sound.time(), 0, soundLen, 10, 390));

        if (sliderVal1 != sliderVal2) {
            sound.time(soundPos);
        }
        sliderVal2 = slider.value();
        mouseOff = false;
    }
    
    this.draw = function () {
        this.drawScrub();

        // soundLength = sound.duration();
        // soundPos = map(slider, 10, 390, 0, soundLength);
        // slider.value(map(sound.time(), 0, soundLength, 10, 390));

        // mouseOff = false;

        // var soundPos = slider.value();
        // p = soundPos;
        // currentTime = map(soundPos, 0, 100, 0, soundLength);
    };

    this.mouseClicked = function () {
        sliderVal = slider.value();

        soundLen = sound.duration();
        soundPos = map(sliderVal, 10, 390, 0, soundLen);
        changeSliderPos = map(soundPos, 0, soundLen, 10, 390);
    };
}