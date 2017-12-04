let video1;
let video2;
let video3;
let video4;
let video5;
let video6;
var px = 0;
var py = 0;
var pz = 0;

function preload(){
  video1 = createVideo("water.mp4");
  video1.id("videoone");
  video2 = createVideo("fire.mp4");
  video2.id("videotwo");
  video3 = createVideo("fire2.mp4");
  video3.id("videothree");
  video4 = createVideo("fire3.mp4");
  video4.id("videofour");
  video5 = createVideo("water3.mp4");
  video5.id("videofive");
  video6 = createVideo("water2.mp4");
  video6.id("videosix");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video1.hide();
  video2.hide();
  video3.hide();
  video4.hide();
  video5.hide();
  video6.hide();
  // video2.play();
  // video1.position(0,0);
  // video1.size(width/2, height);

}

function draw() {
  background(220);
    px = width/2+ x/200*width/2;
    py = height/2+ y/200*height/2;
    pz = z;

    image(video1, 0, height/2 - 100, width/2, 200, pz, pz, 1920 - pz, 1080 - pz);
    image(video5, 0, height/2 + 100, width/2, 200, pz, pz, 1920 - pz, 1080 - pz);
    image(video6, 0, height/2 - 300, width/2, 200, pz, pz, 1920 - pz, 1080 - pz);
    image(video2, width/2, height/2 - 100, width/2, 200, pz, pz, 1920 - pz, 1080 - pz);
    image(video3, width/2, height/2 - 300, width/2, 200, pz, pz, 1920 - pz, 1080 - pz);
    image(video4, width/2, height/2 + 100, width/2, 200, pz, pz, 1920 - pz, 1080 - pz);
    // translate(width/2,height/2);
    ellipse(px, py, 10, 10);

    //console.log(py/height)

    // if within waterfall
    if (px < width/2) {
      if (document.getElementById("videoone").paused) {
        console.log("play videoone ");
        document.getElementById("videoone").play();
        document.getElementById("videoone").playbackRate = py/height;
      }
      else {
        document.getElementById("videoone").playbackRate = py/height;
      }

      if (document.getElementById("videofive").paused) {
        console.log("play videofive ");
        document.getElementById("videofive").play();
        document.getElementById("videofive").playbackRate = py/height;
      }
      else {
        document.getElementById("videofive").playbackRate = py/height;
      }

      if (document.getElementById("videosix").paused) {
        console.log("play videosix ");
        document.getElementById("videosix").play();
        document.getElementById("videosix").playbackRate = py/height;
      }
      else {
        document.getElementById("videosix").playbackRate = py/height;
      }


      if (!document.getElementById("videotwo").paused) {
        console.log("pause videotwo");
        document.getElementById("videotwo").pause();
      }

      if (!document.getElementById("videothree").paused) {
        console.log("pause videothree");
        document.getElementById("videothree").pause();
      }

      if (!document.getElementById("videofour").paused) {
        console.log("pause videofour");
        document.getElementById("videofour").pause();
      }


      // closes video two
    } // closes waterfall

    // if on fire
    else {
      console.log("fire");
      if (document.getElementById("videothree").paused) {
        console.log("pause videothree");
        document.getElementById("videothree").play();
        document.getElementById("videothree").playbackRate = py/height;
      } else {
        document.getElementById("videothree").playbackRate = py/height;
      }

      if (document.getElementById("videotwo").paused) {
        console.log("play videotwo");
        document.getElementById("videotwo").play();
        document.getElementById("videotwo").playbackRate = py/height;
      } else {
        document.getElementById("videotwo").playbackRate = py/height;
      }



      if (document.getElementById("videofour").paused) {
        console.log("pause videofour");
        document.getElementById("videofour").play();
        document.getElementById("videofour").playbackRate = py/height;
      } else {
        document.getElementById("videothree").playbackRate = py/height;
      }

      if (!document.getElementById("videoone").paused) {
        console.log("pause videoone");
        document.getElementById("videoone").pause();
      }

      if (!document.getElementById("videofive").paused) {
        console.log("pause videoone");
        document.getElementById("videofive").pause();
      }

      if (!document.getElementById("videosix").paused) {
        console.log("pause videoone");
        document.getElementById("videosix").pause();
      }

    }


  // if(x < width/2){
  //   video2.pause();
  // }else{
  //   video1.pause();
  // }


}
