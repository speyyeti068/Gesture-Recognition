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

        if (results.length >= 0){
            console.log(results);
        }
    })
}

function draw(){
    background("red");
}