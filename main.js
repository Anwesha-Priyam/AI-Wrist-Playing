console.log("Test trial 1? Checking console (:");

noseX=0;
noseY=0;

rightWristX=0;
leftWristX=0;

difference=0;
function preload()
{
    img=loadImage("EverSpring fairy wolf.png")
}

function setup()
{
    video=createCapture(VIDEO);
    video.size(122,688);
    video.position(300, 300)

    canvas=createCanvas(300,500);
    canvas.position(100,100);

    poseNet=ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;

        difference=floor(leftWristX - rightWristX);
    }
}

function draw()
{
  image(img ,noseX ,noseY ,difference ,difference)
}