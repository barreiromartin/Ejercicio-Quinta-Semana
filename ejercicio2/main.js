/*

Crea un programa que genere un número al azar (entre el 1 y el 100) y el
usuario debe de intentar acertar el número que se generó, con 5 intentos
como mucho. El programa debe avisar al usuario si es menor o mayor que el
que introdujo. Debe de preguntar al usuario al terminar, tanto si gana como
si pierde, si quiere volver a jugar.

*/


function main(){
    var seguirQuiz = false;


    do{
        adivinar( numeroRandom(1,100) );
        continuar = entradaConsola ( 'Quieres jugar otra partida?\n1- Si\n2- No' );

        if(continuar == "Si" || continuar == "SI" || continuar == "si" || continuar == "1" ){
            seguirQuiz = true;
        }else{
            seguirQuiz = false;
        }

    }while(seguirQuiz)
    

}

main();