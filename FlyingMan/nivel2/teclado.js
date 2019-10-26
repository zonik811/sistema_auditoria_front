//Play al iniciar
var pause = true;


//controles
var clickM = null;
var pressKey = null;

window.onkeyup = function(press){
    if(press.key === "w" || press.key === "W" || press.key == " " ){
        flyUp();
        pause = false;
    }
    if(press.key === "Enter"){
        pause=!pause;
        resetGame();
    }
}

function flyUp(){
    if(!pause){
        Pajaro.y-=40;
        grados=-90;
        buclePrincipal.mseg = 0;
        puntos++;
       
        console.log("puntos"+ puntos)
        if(puntos == 12)
        {
            finNivel2();
           
        }
      
     
    }
}