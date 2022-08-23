difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function draw(){

    document.getElementById("font_size").innerHTML = "size of a font will be = " + difference + "pixels.";
    background("lightblue");
    fill("blue");
    text("Noah", 200.69, 400.69);
    textSize(difference);
}

function modelLoaded(){

    console.log("Posenet Is on");

}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

    }
    
}