video = "";
status = "";
objects = [];


function preload()
{
    video = createVideo('video.mp4');
    video.hide();

}
function setup ()
{
    canvas = createCanvas (480,380) ;
    canvas.center();

}

function draw()
{
    image(video,0,0,480,380);
     
    if (status !=" ")
    {
        objectDetector.detect(video, gotResult);
        for(i= 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "status : object dectected"
            document.getElementById("numberOfObject").innerHTML = "number of object detected are : " +object.length;

            fill("#FF0000");
            percent = floor(objects [i].confidence*100);
            text(object [i].label +" " +percent + "%", objects [i].x + 15 , objects [i].y + 15);
            noFill();
            stroke("FF0000");
            rect(objects [i].x,objects [i].y,objects [i].width, objects [i].height);
        
        }
    }

}
 function gotResult(error,results)
 {
if (error) {
    console.log (error);
} else{
console.log (results);
objects = results;

}
 }
 function start ()
 {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting object";
   

 }
 function modelLoaded ()
 {
    console.log ("modal is loaded");
    status = true ;
    video.loop();
    video.speed(1);
    video.volume(0);

 }
  
 
 