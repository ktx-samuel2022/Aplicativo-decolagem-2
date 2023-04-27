var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
var caixaTexto = document.getElementById("caixaTexto");
var camera = document.getElementById("camera");
 
Webcam.set({
    
    width:350, 
    heigth:300, 
    image_format:'png',
    png_quality:90
})
function Selfie(){

    recognition.start();
    caixaTexto.value = '';

}

recognition.onresult=function(result){
    console.log(result.results[0][0].transcript);
    
    caixaTexto.value = result.results[0][0].transcript;
    var trancricao = caixaTexto.value;

    if(trancricao == 'selfie'||trancricao == 'foto'){

        var utterThis = new SpeechSynthesisUtterance("tirando sua selfie em 5 segundos")
        var synth = window.speechSynthesis;
        synth.speak(utterThis);
        Webcam.attach(camera);
    }





}