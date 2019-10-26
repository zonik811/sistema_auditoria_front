var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;

window.addEventListener("load", function(){
	document.body.appendChild(canvas);
    inicio.iniciarJuego();
});

var inicio = {
        iniciarJuego(){
        dimensiones.iniciar();
		buclePrincipal.iterar();
		mouse.iniciar();
		autoScale(canvas);
    }
};

//hay que hacer algo  mejor esto no funcionara para los botones en pantalla
function autoScale(id) 
{
 
	var d = document, E, iw = window.innerWidth,
		ih = window.innerHeight, X, Y, scale;
 
	if(typeof id == 'object') E = id;
	else E = d.getElementById(id);
 
	X = iw/2 - E.width/2; // centro en x
	Y = ih/2 - E.height/2;// centro en y
 
	if (iw/E.width > ih/E.height) {
		scale = ih/E.height;
	} else if (iw/E.width < ih/E.height) {
		scale = iw/E.width;
	} else {
		scale = 1;
	}
	document.getElementsByTagName("html")[0].style.overflow = "hidden";
 
	// acomodar en el centro y escalar a pantalla completa
	E.style.transform = 'translate('+X+'px,'+Y+'px) scale('+scale+')';
	document.body.width = iw;
 
	// para que se ejecute al cambiar el tamaÃ±o de la ventana
	window.onresize = function (event) {
		autoScale(id);
	}
 
}
