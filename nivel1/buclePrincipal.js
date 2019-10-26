// 1 seg 1000 ms
var buclePrincipal = 
{
    idEjecucion: null,
    ultimoRegistro: 0,
    aps:0,
    fps:0,
    fps2:0,
    seg:0,
    mseg:0,
    iterar(registroTemporal)
    {
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);//Bucle callBack
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();
        if(!pause){
            buclePrincipal.mseg++;
        }
        // contador fps y aps
        if(registroTemporal - buclePrincipal.ultimoRegistro > 999){// si ya ha pasado 1 segundo
            buclePrincipal.ultimoRegistro = registroTemporal;
            buclePrincipal.seg++;//segundos que han pasado
            buclePrincipal.fps2 = buclePrincipal.fps;
            
            console.log("APS: " + buclePrincipal.aps + " FPS: " + buclePrincipal.fps)
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },
    detener(){

    },
    actualizar(registroTemporal){
        buclePrincipal.aps++;
        //ctx.clearRect(Pajaro.x,Pajaro.y,Pajaro.width,Pajaro.height);
    },
    dibujar(registroTemporal)
    {
        buclePrincipal.fps++;
        escenaJuego();
    },
    acabarNivel()
    {
        if(this.mseg == 5){
            finNivel1();
        }
    }
}