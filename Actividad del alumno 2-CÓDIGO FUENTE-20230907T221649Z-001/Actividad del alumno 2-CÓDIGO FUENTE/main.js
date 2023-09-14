var reconocedorVoz =window.webkitSpeechRecognition;
var reconocedor = new reconocedorVoz();
var Textbox = document.getElementById("textbox");

function start()
{
    document.getElementById("microfono")
    document.getElementById("textbox").innerHTML = "";
    reconocedor.start();
    setTimeout(function(){
        document.getElementById("microfono")
        src="mic.png"
    }, 4000);
}

reconocedor.onresult = function(event) {
    console.log(event);
    var Contenido = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Contenido;
    console.log(Contenido);

var consoleMinus= Contenido.tolowerCase();

if(contenidoMinus == "toma mi selfie")
{
    console.log(contenidoMinus + "tomando selfie ---");
    speak();
}
}

function speak(){
    var habla = window.speechSynthesis;
    speak_data = " Tu selfie se tomara en 3 segundos";
    var diEsto = new SpeechSynthesisUtterance(speak_data);
    diEsto.pitch =10;
    diEsto.volume =0.4;
    habla.speak(diEsto);
    WebCam.attach(camera);
    setTimeout(function (){
        tomar_foto();
        Save();
    },3000);}


camera = document.getElementById("camera");
WebCam.set({
width: 360,
height: 250,
image_format: 'png',
png_quality:90
});



function tomar_foto(){
    WebCam.snap(function(data_uri){
        document.getElementById("result").innerHTML =
        '<img id="selfie_image" src="'+data_uri+'"/>';
    });

}

function Save(){

    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

