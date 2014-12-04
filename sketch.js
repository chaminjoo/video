var playing = false;
var fire;
var button;

var night;
var button;


function setup() {
  // specify multiple formats for different browsers
  fire = createVideo(['fire.mp4'
                         ]);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener

   night = createVideo(['night.mp4'
                         ]);
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

  if (playing) {
    night.pause();
    button.html('play');
  } else {
    fire.loop();
    button.html('pause');
  }
  playing = !playing;
}