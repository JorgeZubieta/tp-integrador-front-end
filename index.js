// agregamos un comentario
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Calculo de valor de tickets
function mat(){
    var categoria=document.getElementById("categoria");
    var valorseleccionado=parseFloat(categoria.options[categoria.selectedIndex].value);
    var cantidad=document.getElementById("cantidad").value;
    var total=0;

    switch(valorseleccionado){
        case 1:
            total=cantidad*200-cantidad*200*80/100;
            // document.getElementById("total").value=total;
            break;
        case 2:
            total=cantidad*200-cantidad*200*50/100;
            // document.getElementById("total").value=total;
            break;
        case 3:
            total=cantidad*200-cantidad*200*15/100;
            // document.getElementById("total").value=total;
            break;
    }
    document.getElementById("total").value="  Total a Pagar: $ " + total;
}