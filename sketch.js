var playing = false;
var fire;
var button;
var night;

function setup() {

  createCanvas(1000,800);
  // specify multiple formats for different browsers
  fire = createVideo(['fire.mp4'
                         ]);
  
   night = createVideo(['night.mp4'
                         ]);
  
}

function draw(){
  image(fire,0,0);
  image(night,fire.width,0);
}
