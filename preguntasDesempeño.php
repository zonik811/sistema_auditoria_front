<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <title>Desempe�o</title>
</head>

<style>
    body {
        background-image: url("http://www.edumakers.es/images/19.png");
    }
</style>

<body>
    <input type="hidden" id="txt_nivel" value="3">
    <div class="form-group" id="respuesta_preguntas" style="margin-left: 10px">
        <div class="row">
            <div class="col-12">
                <center><h1 id="titulo_evidencia"></h1></center>
            </div>
        </div>
        <form id="preguntas">
            
        </form>
    </div>
</body>
<script src="js/flyman.js"></script>
<script type="text/javascript">
    $(function() {
        traer_preguntas("desempeno")
    });
</script>

</html>