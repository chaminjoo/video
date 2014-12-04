var playing = false;
var fire;
var button;


function setup() {
  // specify multiple formats for different browsers
  fire = createVideo(['assets/fire.mp4', 
                         'assets/fire.webm']);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fire.pause();
    button.html('play');
  } else {
    fire.loop();
    button.html('pause');
  }
  playing = !playing;
}