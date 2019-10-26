function  traer_preguntas(evidencia){
    $.get("http://api-auditoria.com.devel/api/evidencia/"+evidencia,{}).done(function(resp){
        console.log(resp)
        var cuerpo="";
        $("#titulo_evidencia").html("Indicadores de: "+resp.tipo_evidencia);
        for (var i = 0; i < resp.evidencias.length; i++) {
            var id_evidencia = resp.evidencias[i].id_evidencia;
            cuerpo+="<center><h2>"+resp.evidencias[i].nombre_evidencia+"</h2></center>";
            for (var j = 0; j < resp.criterios.length; j++) {
                var id_criterio = resp.criterios[j].id_criterio
                if (resp.criterios[j].id_evidencia==id_evidencia) {
                    cuerpo+="<h3>"+resp.criterios[j].numeral+" "+resp.criterios[j].enunciado+"</h3>"
                    for (var k = 0; k < resp.indicadores.length; k++) {
                        
                        if (resp.indicadores[k].id_criterio == id_criterio) {
                            var id_indicador = resp.indicadores[k].id_indicador;
                            cuerpo +='\
                            <div class="form-group">\n\
                                <label>'+resp.indicadores[k].enunciado+'</label>\n\
                                <select class="form-control" name="indicador_1'+resp.indicadores[k].id_indicador+'">';
                                for (var l = 0; l < resp.opciones.length; l++) {
                                    console.log(resp.opciones[l].id_indicador+"=>"+id_indicador);
                                    if (resp.opciones[l].id_indicador == id_indicador) {
                                        cuerpo+='<option value="'+resp.opciones[l].valor+'">'+resp.opciones[l].descripcion+'</option>'
                                    }
                                    
                                }
                                cuerpo+="\n\
                                </select>";
                            cuerpo+="\n\
                            </div>"
                        }
                    }
                }
                
            }
        }
        cuerpo+='<a id="btn_eniar" name="btn_enviar" class="btn btn-success" onclick="enviar_respuestas()">Enviar</a>'
        $("#preguntas").html(cuerpo);
        nivel++;
    }).fail(function(err){
        console.log(err)
    });    
}
function enviar_respuestas (){
    var nivel = $('#txt_nivel').val();
    if (nivel=="reporte") {
        window.open("reporte.php", "_parent")
    } else{
        window.open("cargarNivel"+nivel+".html", "_parent")
    }
    
}