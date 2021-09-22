

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

}


function modelLoaded() {
    console.log(" model has loaded ");
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}