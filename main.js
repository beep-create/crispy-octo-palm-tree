noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(870, 210);
    
    

    canvas = createCanvas(550, 500);
    canvas.position(100, 210);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw() {
  background('#6FA3EA');

  textSize(difference);
  fill('#CCCCFF');
  text("good day",10,100);
  

}


function modelLoaded() {
    console.log(" model has loaded ");
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
      console.log("noseX = " + noseX + " noseY = " + noseY);

      leftWristX=results[0].pose.leftWrist.x;
      rightWristX=results[0].pose.rightWrist.x;
      console.log("leftWristX = " +  leftWristX + "rightWristX = " +  rightWristX);
      
      difference = floor( leftWristX - rightWristX); 
      
    }
}