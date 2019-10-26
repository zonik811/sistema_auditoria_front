var mouse = {
    x: null,
    y: null,
    press1: null,
    press2: null,
    press3: null,
    focus: null,
    contador: null,
    iniciar(){
        mouse.move();
        mouse.up();
        mouse.down();
    },
    move(){
        window.addEventListener("mousemove",function(event){
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            //console.log("Coordenadas X: " + mouse.x + " Coordenadas Y: " + mouse.y)
        },false);
    },
    down(){
        window.addEventListener("mousedown",function(event){
            // Si el mouse esta presionado
            mouse.press1 = (event.which==1)? true: false;
           
            mouse.press2 = (event.which==2)? true: false;
            mouse.press3 = (event.which==3)? true: false;
            if(event.which == 1){
               
                flyUp()
              
                pause = false;
               
               // console.log("Tiene presionado el boton pricipal : " + mouse.press1 )
            }
            if(event.which == 2){
                //console.log("Tiene presionado el boton de enmedio de el scroll: " + mouse.press2)
            }
            if(event.which == 3){
               // console.log("Tiene presionado el boton secundario: " + mouse.press3)
            }
        },false)
    },
    up(){
        window.addEventListener("mouseup",function(event){
            // Si el mouse estaba presionado y lo soltaste
            mouse.press1 = (event.which == 1)? false: true;
            mouse.press2 = (event.which == 2)? false: true;
            mouse.press3 = (event.which == 3)? false: true;

            if(event.which == 1){
              //  console.log("Acaba de soltar el boton pricipal : " + mouse.press1 )
            }
            if(event.which == 2){
               // console.log("Acaba de soltar el boton de enmedio de el scroll: " + mouse.press2)
            }
            if(event.which == 3){
               // console.log("Acaba de soltar el boton secundario: " + mouse.press3)
            }
        },false)
    },
    focus(objeto){
        objeto.addEventListener("mouseover",function(){
            // Si el mouse esta sobre un objeto seleccionado por id en este caso el canvas
            mouse.focus = true;
            //console.log("Foco: " + mouse.focus + " En: " + objeto)
        },false);
        objeto.addEventListener("mouseout",function(){
            // Si el mouse sale de un objeto enfocado y seleccionado por id anteriormente
            mouse.focus = false;
           // console.log("Foco: " + mouse.focus + " desenfocado de: " + objeto)
        },false);
    }
};