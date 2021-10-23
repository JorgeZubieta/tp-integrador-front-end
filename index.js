// agregamos un comentario
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Calculo de valor de tickets
function mat(){
    var cat=document.getElementById("categoria");
    var valorseleccionado=parseFloat(cat.options[cat.selectedIndex].value);
    var cant=document.getElementById("cantidad").value;
    var total=0;

    switch(valorseleccionado){
        case 1:
            total=(cant*200)-( ((cant*200)*80)/100 );
            // document.getElementById("total").value=total;
            break;
        case 2:
            total=(cant*200)-( ((cant*200)*50)/100 );
            // document.getElementById("total").value=total;
            break;
        case 3:
            total=(cant*200)-( ((cant*200)*15)/100 );
            // document.getElementById("total").value=total;
            break;
    }
    document.getElementById("total").value="  Total a Pagar: $ " + total;

}