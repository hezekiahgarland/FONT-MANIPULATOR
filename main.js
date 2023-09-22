noseX="";
noseY="";
size="";

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(600, 150);
    posenet=ml5.poseNet(video, modelloaded);
}
function modelloaded(){
    console.log("modelloaded");
    posenet.on("pose", getresults)
}
function getresults(r){
    if(r.length>0){
        console.log(r);
        noseX=r[0].pose.nose.x;
        noseY=r[0].pose.nose.y;
        lwX=r[0].pose.leftWrist.x;
        rwX=r[0].pose.rightWrist.x;
        size=lwX-rwX;
        document.getElementById("squaresize").innerHTML="fontsize is "+Math.floor(size);
    }
}
function draw(){
    background("grey");
    fill("red");
    stroke("blue");
    textSize(size)
    text("heze",100,300)
}