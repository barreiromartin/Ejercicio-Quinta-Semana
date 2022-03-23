function retirarDinero(cantidad){
    console.log('retirarDinero está funcionando');
    var aux_cantidad = cantidad;
    var finalPrograma = false;

   
    //billetes
    let billete500 = 0;
    let billete200 = 0;
    let billete100 = 0;
    let billete50 = 0;
    let billete20 = 0;
    let billete10 = 0;
    let billete5 = 0;

    while(!finalPrograma){
        if(aux_cantidad >= 500){
            aux_cantidad -= 500;
            billete500++;
        }else if(aux_cantidad >= 200){
            aux_cantidad -= 200;
            billete200++;
        }else if(aux_cantidad >= 100){
            aux_cantidad -= 100;
            billete100++;
        }else if(aux_cantidad >= 50){
            aux_cantidad -= 50;
            billete50++;
        }else if(aux_cantidad >= 20){
            aux_cantidad -= 20;
            billete20++;
        }else if(aux_cantidad >= 10){
            aux_cantidad -= 10;
            billete10++;
        }else if(aux_cantidad >= 5){
            aux_cantidad -= 5;
            billete5++;
        }else{
            finalPrograma = true;
        }
    }

    salidaBilletes = "500 = " + billete500 + "\n" + 
    "200 = " + billete200 + "\n" + 
    "100 = " + billete100 + "\n" + 
    "50 = " + billete50 + "\n" + 
    "20 = " + billete20 + "\n" + 
    "10 = " + billete10 + "\n" + 
    "5 = " + billete5 + "\n";
    
    return salidaBilletes;
}


function esRetirable(cantidad){
    var multiplo = false;
    if((cantidad % 5) == 0){
        multiplo = true;
    }
}

function cajero(cantidad){
    if(esRetirable(cantidad)){
        cajeroSalida = retirarDinero(cantidad);
    }else{
        cajeroSalida = ('La cantidad solicitada no es retirable');
    }

    return cajeroSalida;
}