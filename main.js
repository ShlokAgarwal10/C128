harry_theme = "";
peter_theme = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload(){
harry_theme = loadSound("music.mp3");
peter_theme = loadSound("music2.mp3");
}

function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
image(video,0,0,600,500);
}

function modelLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    console.log("Left wrist X = "+leftwristX+" Left wrist Y = "+leftwristY);
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    console.log("Right wrist X = "+rightwristX+" Right wrist Y = "+rightwristY);
    
    }
    }
