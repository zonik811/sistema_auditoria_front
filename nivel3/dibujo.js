var grados = 0;
var backX = 0;
var cw = canvas.width;
var ch = canvas.height;
var speedScene = 10;
var backW = cw;
var goX = 0;
var puntos = 0;
var turnoImg = 0;

function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function colision(obj1, obj2) {
    if (obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.height + obj1.y > obj2.y) {
        pause = true;

    }
}

resetGame();

function escenaJuego() {
    colision(Pajaro, Suelo);
    colision(Suelo, Pajaro);
    colision(TuberiaDown, Pajaro)
    colision(Pajaro, TuberiaDown)
    colision(Pajaro, TuberiaUp)
    colision(TuberiaUp, Pajaro)



    // Fondo de imagen Paisaje
    ctx.translate(0, ch - 720);
    var Edificios = ctx.createPattern(Fondo, 'repeat-x');
    ctx.fillStyle = Edificios;
    ctx.fillRect(0, 0, cw, ch);
    ctx.resetTransform(0, 0, cw, ch);

    //Dibujamos el suelo
    ctx.save();
    ctx.translate(0, ch - 100);
    var tierra = ctx.createPattern(Tierra1, 'repeat-x');
    ctx.fillStyle = tierra;
    ctx.fillRect(0, 0, cw, ch);
    ctx.resetTransform(0, 0, cw, ch);
    ctx.restore();

    //Linea de suelo negra
    ctx.beginPath();
    ctx.moveTo(Suelo.x, Suelo.y);
    ctx.lineTo(cw, Suelo.y);
    ctx.stroke();
    ctx.closePath();

    //Fondo en movimiento
    ctx.translate(backX, Suelo.y);
    var pattern = ctx.createPattern(Tierra1, 'repeat-x');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, backW, ch);
    ctx.resetTransform();

    if (!pause) { //si el juego esta play
        Pajaro.y += 9.8 * buclePrincipal.mseg / 80;

        backX -= speedScene;
        backW += speedScene;
        goX -= speedScene;
        turnoImg += 0.2;

        if (grados >= 90) {
            grados = 90;
        } else {
            grados += 5;
        }
    }

    TuberiaUp.x = goX;
    TuberiaDown.x = goX;

    //Dibbujamos las tuberias
    if (goX == -80) {
        goX = cw;
        TuberiaUp.height = randomInt(30, Suelo.y - 200);
        TuberiaDown.y = TuberiaUp.height + 200;
        TuberiaDown.height = Suelo.y - TuberiaDown.y;
    }
    ctx.beginPath()
    ctx.lineWidth = 2;

    //pipelinesUp
    ctx.fillStyle = "#C6A664";
    ctx.rect(goX, TuberiaUp.y, TuberiaUp.width, TuberiaUp.height)

    //pipelinesDown
    ctx.fillStyle = "#C6A664";
    ctx.rect(goX, TuberiaDown.y, TuberiaDown.width, TuberiaDown.height);
    ctx.fill();
    ctx.stroke();

    //Dibujamos el Pajaro con sus posiciones y animaciones
    anguloRotacion = grados * Math.PI / 360;
    //ctx.translate(0,ch-720);
    ctx.translate(Pajaro.x + 20, Pajaro.y + 20);
    ctx.rotate(anguloRotacion);
    if (turnoImg <= 1) {
        ctx.drawImage(Bird1, -20, -20, Pajaro.width, Pajaro.height) //Bird!!!15
    } else if (turnoImg <= 2) {
        ctx.drawImage(Bird3, -20, -20, Pajaro.width, Pajaro.height) //Bird!!!15
    } else if (turnoImg <= 3) {
        ctx.drawImage(Bird2, -20, -20, Pajaro.width, Pajaro.height) //Bird!!!15        
    } else {
        ctx.drawImage(Bird1, -20, -20, Pajaro.width, Pajaro.height) //Bird!!!15
        turnoImg = 0;
    }

    ctx.resetTransform();

    // Mostramos los fps y segundos
    ctx.fillStyle = "#000";
    ctx.fillText("fps : " + buclePrincipal.fps2, 50, 50);
    ctx.fillText("seg : " + buclePrincipal.seg, 50, 60);

    var count = 0;
    if (pause) { // si el juego esta pausado
        count++;
        ctx.save();
        ctx.font = "40px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#000";
        turnoImg += 0.05;
        ctx.fillText("Start Game", cw / 2, ch / 2);
        ctx.restore();
    }


    //ctx.fillRect(Pajaro.x,Pajaro.y,Pajaro.width,Pajaro.height);

}