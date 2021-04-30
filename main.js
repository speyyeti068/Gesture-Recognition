noseX = 0;
noseY = 0;

rightWristX = 0;
leftWristX = 0;
difference = 100;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,400);

    canvas = createCanvas(500,400);
    canvas.position();
    
    poseNet = ml5.poseNet(video,function(){
        console.log("Model Loaded");
    });
    
    poseNet.on("pose",function(results){
        console.log("Got Results");

        if (results.length > 0){
            console.log(results);

            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("Nose X = " + noseX, "Nose Y = " + noseY);

            rightWristX = results[0].pose.rightWrist.x;
            leftWristX = results[0].pose.leftWrist.x;
            console.log("Right Wrist X = " + rightWristX, "Left Wrist X = " + leftWristX);

            difference = floor(leftWristX - rightWristX);
            console.log("Difference = " + difference);
        }
    })
}

function draw(){
    background("red");

    fill("aqua");
    stroke("yellow");
    square(noseX,noseY,difference);

    document.getElementById("squareSize").innerHTML = "The Size Of The Square Is Aproximatly " + difference + " px";
}