function adivinar(numero){
    var numeroSecreto = numero;
    var intento = 1;
    var pruebaUsuario = "";
    var mensajeAyuda = "";
    var acierto = false;

    console.log(numeroSecreto);

    do{
        if(pruebaUsuario == numeroSecreto){
            alert('Has acertado.');
            acierto = true;
            break;
        }

        if(intento > 1 && pruebaUsuario != numeroSecreto){
            if(pruebaUsuario < numeroSecreto){
                alert('Has fallado\nEl número secreto es mayor.');
            }else{
                alert('Has fallado\nEl número secreto es menor.');
            }
        }

        pruebaUsuario = entradaConsola('Intenta adivinar el número secreto entre el 1 y el 100\nIntento número ' + intento);
        intento++;        

    } while ( intento <= 5 || acierto );

    return acierto;


    
}