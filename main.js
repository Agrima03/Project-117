function setup(){
    canvas= createCanvas(300,250);
    canvas.position(527,350);
    video= createCapture(VIDEO);
    video.hide();
    classifier= imageClassifier('https://teachablemachine.withgoogle.com/models/C66lPNiPB/model.json',modelLoaded);
}

function modelLoaded(){
    console.log(modelLoaded);
}

function draw(){
    image(video,0,0,300,250);
    classifier.classify(video,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
     console.log(results);
     document.getElementById("result_member_name").innerHTML= results[0].label;
     document.getElementById("result_member_accuracy").innerHTML= results[0].confidence.toFixed(2);
    }
}