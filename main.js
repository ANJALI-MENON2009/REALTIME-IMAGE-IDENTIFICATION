function setup()
{
    canvas = createCanvas(350, 300) ;
    canvas.center() ;
    video = createCapture(VIDEO) ;
    video.hide() ;
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SrXkEDKTF/model.json' , modelLoaded) ;
}

function modelLoaded()
{
    console.log('Model is loaded.') ;
}

function draw()
{
    image(video, 0,0, 350, 300) ;
    classifier.classify(video, gotResult) ;
}

function gotResult(error, results)
{
    if(error) {
        console.error(error) ;
    }
    else {
        console.log(results) ;
        document.getElementById("object_name").innerHTML = results[0].label ;
        document.getElementById("accuracy_val").innerHTML = results[0].confidence.toFixed(2) * 100 + " %";
    }
}