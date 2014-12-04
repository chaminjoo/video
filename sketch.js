var playing = false;
var fire;
var button;
var night;
var wide;

function setup() {

  createCanvas(1000,800);
  // specify multiple formats for different browsers
  fire = createVideo(['fire.mp4'
                         ]);
  
   night = createVideo(['night.mp4'
                         ]);
    wide = createVideo(['wide.mp4'
                         ]);

  fire.loop();
  night.loop();
  wide.loop();

  fire.hide();
  night.hide();
   wide.hide();

}
}

function draw(){
  background(0);
  image(fire,0,0,500,300);
  image(night,500,0,500,300);
  image(wide,0,300,1000,200);
}
