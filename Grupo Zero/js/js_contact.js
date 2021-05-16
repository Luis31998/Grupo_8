$(document).ready(function () {

    $("#error-nombre").hide()

    $("#nombre-txt").blur(function () {
        console.log("nombre correcto")


        //VALIDACIÓN NOMBRE
        if ($("#nombre-txt").val().length < 3) {
            console.log("nombre activado")
            $("#error-nombre").html("El Nombre esta vacio")
            $("#error-nombre").fadeIn()
        }

    });

    $("#nombre-txt").focus(function () {
        $("#error-nombre").fadeOut()

    });




});
    
