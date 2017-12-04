let video1;
let video2;

function preload(){
  video1 = createVideo("water.mp4");
  video1.id("videoone");
  video2 = createVideo("fire.mp4");
  video2.id("videotwo");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video1.hide();
  video2.hide();
  // video2.play();
  // video1.position(0,0);
  // video1.size(width/2, height);

}

function draw() {
  background(220);
  if(x > -10000 && x < 100000){
    x = width/2+ x*width/2;
    y = height/2+ y*height/2;

    image(video1, 0, height/2 - 100, width/2, 200);
    image(video2, width/2, height/2 - 100, width/2, 200);
    // translate(width/2,height/2);
    ellipse(x, y, 10, 10);

    if(x < width/2){
      document.getElementById("videoone").play();
      document.getElementById("videotwo").pause();
    }else{
      document.getElementById("videoone").pause();
      document.getElementById("videotwo").play();
    }
  }

  // if(x < width/2){
  //   video2.pause();
  // }else{
  //   video1.pause();
  // }


}
