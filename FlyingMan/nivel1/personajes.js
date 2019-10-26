class Rectangulo{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

//var Pajaro = new Rectangulo(cw/6,ch/2,50,50,"#fff");
//var Suelo = new Rectangulo(0,ch-100,cw,250,"#ddd");
function resetGame(){
    buclePrincipal.mseg = 0;
    grados = 0;
    Pajaro = new Rectangulo(cw/6,ch/3,40,40,"#fff");
    Suelo = new Rectangulo(0,ch-100,cw,250,"#ddd");
    TuberiaUp = new Rectangulo(0,0,60, 0,"#000");
    TuberiaDown = new Rectangulo(0,0,60, 0,"#fff");
}

function finNivel1(){

    alert("Acabaste el nivel 1");
    window.open("preguntasConocimiento.html", "_self");

}

function finNivel2(){

    alert("Acabaste el nivel 2");
    window.open("preguntasDesempeño.html", "_self");

}

function finNivel3(){

    alert("Acabaste el nivel 3");
    window.open("preguntasProducto.html", "_self");

}
