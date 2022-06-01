function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
    document.getElementById("answer").innerHTML="There is only 1 big object image from which cocossd model has detected 1 object.";

}


function modelLoaded() { 
    console.log("Model Loaded!") ;
    status = true; 
    objectDector.detect(img, gotResult); 
}

img="";
status="";
object=[];


function preload(){
img=loadImage("tV.jpg");

}


function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("red");
            percennt=floor(object[i].confidence*100);
            text(object[i].label+"  "+percennt+"%",object[i].x+15,object[i].y+15);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
    
        }
    

}
}

function gotResult(error, results){
    if(error){
        console.log(error);

        
    }
    console.log(results);
    object=results;
}
