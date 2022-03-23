/*

Se requiere programar un perfil de usuario simple. El programa en su primera
ejecución deberá pedir los datos al usuario: nombre, apellidos, dirección,
teléfono, email… Una vez indicados, deberá desplegar un menú con
opciones para ver todos los datos y la capacidad de modificar
individualmente cualquier dato. El perfil del usuario debe de ser un objeto
llamado Perfil.


*/


function __onStart__(){
    let usuario = 0;
    let nombre = "";
    let email = "";
    let direccion = "";
    let telefono = "";

    alert('Introduce tus datos de perfil para continuar.');
    nombre = prompt('Nombre:');
    email = prompt('Email:');
    direccion = prompt('Dirección:');
    telefono = prompt('Telefono:');

    usuario = crearUsuario(nombre, email, direccion, telefono);

    return usuario;
    

}

/* 
1 Editar nombre
2 Editar Email
3 Editar direccion
4 Editar telef
5 Salir

*/

function __update__(args){

    let usuario = args;
    let opcion = "";
    let terminar = false;

    do{
        opcion = prompt(usuario.toString() +
            "\n1- Editar Nombre:" +
            "\n2- Editar Email:" +
            "\n3- Editar Dirección:" +
            "\n4- Editar número Teléfono:" +
            "\n5- Terminar programa:"
            );

        switch(opcion){
            case "1":
                aux_nombre = prompt("Nuevo nombre:");
                aux_nombre = usuario.cambiarNombre(aux_nombre);

                break;

            case "2":
                aux_email =  prompt("Nuevo email:");
                aux_email = usuario.cambiarEmail(aux_email);
                
                break;

            case "3":
                aux_direccion = prompt("Nueva dirección;");
                aux_direccion = usuario.cambiarDireccion(aux_direccion);

                break;

            case "4":
                aux_telefono = prompt("Nuevo número de teléfono:");
                aux_telefono = usuario.cambiarTelefono(aux_telefono);

                break;
            
            case "5":
                alert("Final del programa");
                terminar = true;
                break;
            default:
                alert("Elige una opción.");
        }

        
    } while (!terminar)
    

} 

function __main__() {
    let usuario = "";

    usuario = __onStart__();

    if(usuario != ""){
        __update__(usuario);
    }
}

__main__();