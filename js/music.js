
let play = document.getElementById("play");
var sound = document.getElementById("soundImg");

let audio = document.getElementById("audio");
var contador = 0;

function playMusic(){

   if (contador==0) {
    sound.innerHTML=`<img  src="img/loader/sin-sonido.png" alt="">`;
       console.log("Apagado");
       audio.pause();
       contador = 1;

   }else{
    sound.innerHTML=`<img  src="img/loader/musica.png" alt="">`;
    console.log("Encendido");
    audio.play();
    contador = 0;
   }
}
play.addEventListener("click",playMusic,true);

