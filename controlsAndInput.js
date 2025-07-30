function ControlsAndInput() {
    this.menuDisplayed = false;
    this.playbackButton = new PlaybackButton();
    this.nextSong = new nextSong();
    this.previousSong = new previousSong();
    this.fullscreenButton = new fullscreenButton();

    this.mousePressed = function () {
        // toggle play and pause
        if(this.playbackButton.hitCheck()){
            if (sound.isPlaying()) {
                sound.pause();
            } else {
                sound.loop();
            }
            this.playing = !this.playing;
        }

        // toggle fullscreen
        if(this.fullscreenButton.hitCheck()){
            var fs = fullscreen();
            fullscreen(!fs);
        }
    };

    // displays visualiser menu
    this.keyPressed = function (keycode) {
        console.log(keycode);
        if (keycode == 32) {
            this.menuDisplayed = !this.menuDisplayed;
        }

        if (keycode > 48 && keycode < 58) {
            var visNumber = keycode - 49;
            vis.selectVisual(vis.visuals[visNumber].name);
        }
    };

    // draws the playback button and potentially the menu
    this.draw = function () {
        push();

        // this.visMenu.draw()
        this.nextSong.draw();
        this.previousSong.draw();
        this.playbackButton.draw();
        this.fullscreenButton.draw();
        // only draw the menu if menu displayed is set to true.
        if (this.menuDisplayed) {
            text("Select a visualisation:", 100, 30);
            this.menu();
        }
        pop();
    };

    this.menu = function () {
        //draw out menu items for each visualisation
        for (var i = 0; i < vis.visuals.length; i++) {
            var yLoc = 70 + i * 40;
            text(i + 1 + ":  " + vis.visuals[i].name, 100, yLoc);
        }
    };
}
