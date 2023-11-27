

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


scoreLeftWrist = 0;
scoreRightWrist = 0; 


song="";
song2="";
function preload(){
song = loadSound("music.mp3")
song2 = loadSound("music2.mp3")
}



function setup(){
    canvas=createCanvas(720,540);

    canvas.center();
    
    video=createCapture(VIDEO)
    video.hide();


    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function gotPoses(results){
   if(results.length > 0)
   {{
    console.log(results)
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = "+ scoreLeftWrist)

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = " + leftWristY)


    rightWristX = results[0].pose.rightWrist.x;
   rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY)


   }}




}


function modelLoaded(){
    console.log('model is ready')
}

function draw(){
image(video,0,0,720,540)

fill("#ff0000");
stroke("#00ff00")

if(scoreLeftWrist > 0.2)
{
    circle(leftWristX,leftWristY,20);

numY = Number(leftWristY);
remY = floor(numY)
volume = remY/500
document.getElementById("volume").innerHTML = "Volume = "+ volume;
song.setVolume(volume);

}


}


