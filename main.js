function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
    }
    function modelloaded(){
        console.log("modelloaded");
    }
    function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
    }
    function draw(){
    image(video,0,0,300,300);
    }
    function preload(){
        
    }
    function takesnapshot(){
        save("webpage.png");
    }
