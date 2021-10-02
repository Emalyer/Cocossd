img="";
status="";

function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Object";
}

function draw(){
image(img,0,0,640,420);
fill("#382016");
text("Dog",45,75);
noFill();
stroke("#7990F7");
rect(30,60,450,350);
fill("#432B57");
text("Cat",381,75);
noFill();
stroke("#A8F7AA");
rect(280,60,300,350);
}

function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}