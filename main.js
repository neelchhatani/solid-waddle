status_cocossd = "";
cosmic_objects = [];
function setup(){
canvas = createCanvas(480 , 380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function start(){
object_detector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "status: detecting objects";
object_name =  document.getElementById("object_name").value;
video.stop();
status_cocossd = document.getElementById("status").innerHTML = "Objects mentioned found!";
var utterThis = new SpeechSynthesisUtterance;
}
function draw(){
image(video , 0 , 0 , 480 , 380);
object_detector.detect(video , gotResult);
if(status_cocossd != ""){
for(i = 0;i<objects.length;i++){
percentage = floor(objects[i].confidence * 100);
text(objects[i].label+" "+percentage+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#FF0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function modelLoaded(){
console.log("Model is loaded!!!");
status_cocossd = true;
}
function gotResult(error , results){
if(error){
console.log(error);
}
console.log(results);
cosmic_objects = results;
objectDetector.detect(gotResult);
}