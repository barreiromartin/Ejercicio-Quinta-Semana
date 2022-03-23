/*
Se trata de un clásico problema de programación. Se necesita hacer un
cajero automático que de servicio a los usuarios de tal manera que, cuando
el usuario pida retirar dinero en efectivo, se muestre por pantalla la cantidad
que se retira y los billetes que se usaron, evitando que el usuario introduzca
una cifra que no pueda ser retirada del cajero (cualquiera que termine en
otra cantidad que no sea 0 o 5 al no existir billetes más pequeños que los de
5 euros). Las operaciones de retirada no pararán hasta que el usuario lo pida.

El cajero debe de ser lo más eficiente posible con los billetes que da al
usuario, por ejemplo:

El usuario desea retirar 380 euros y se le da:

1 billete de 200
1 billete de 100
1 billete de 50
1 billete de 20
1 billete de 10
*/
function main(){
    
    
    do{
        var cantidad = entradaConsola('¿Cuanto dinero desea retirar?');
        var programaCajero = cajero(cantidad);
        var mensajeSalida = 'Se van a retirar ' + cantidad + '€\n' + programaCajero + '\n-------------';
        console.log(mensajeSalida);
    
        var continuarCajero = prompt('¿Desea realizar otra operación?\n1- Si\n2- No');
        if(continuarCajero == "Si" ||
            continuarCajero == "S" ||
            continuarCajero == "SI" ||
            continuarCajero == "si" ||
            continuarCajero == "1" ) {

                continuar = true;
        }else{
                continuar = false;
        }
    }while(continuar);
}

main();