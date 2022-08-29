var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("voice_input").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("voice_input").innerHTML = Content;
    console.log(Content);
    if(Content == "Take my selfie.") {
    speak();
    console.log("taking selfie in 5 seconds");
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking Your Selfie In Five Seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    setTimeout(function(){
        takeSnapshot();
        save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie" src="'+data_uri+'"/>';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}