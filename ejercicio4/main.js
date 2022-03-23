/*

Crear un programa que muestre por pantalla diversas obras de arte con los
siguientes requisitos:

- Las obras de arte tienen todos el mismo padre Arte con la misma
función y el mismo atributo nombre.

    function alabarObra(){
    console.log(nombre + “ es impresionante”)
    }

- Hay 4 objetos hijos de Arte llamados: Cine, Escultura, Pintura y Teatro.
    - El Cine debe tener los atributos de duración y género
    - Las Esculturas deben tener los atributos de material y época
    - La Pintura debe tener los atributos de autor y estilo
    - El Teatro debe tener los atributos de duración y época

- Cada objeto hijo debe tener su propia función que muestre por
pantalla sus atributos.

Crea por lo menos un objeto de cada y usa las funciones por lo menos una
vez para mostrar que funciona.



*/
function __main__(){

    let obra_cine = new cine(180, "Comedia");
    let obra_escultura = new escultura("Marmol", "Romanticismo");
    let obra_pintura = new pintura("Pablo Picaso", "Impresionismo");
    let obra_teatro = new teatro(120, "Renacimiento");

    obra_cine.nombre = "Papá Pitufo";
    obra_escultura.nombre = "Señorito de Marmol";
    obra_pintura.nombre = "Pablito de Tarde";
    obra_teatro.nombre = "La señorita";

    alert(obra_cine.toString());
    alert(obra_escultura.toString());
    alert(obra_pintura.toString());
    alert(obra_teatro.toString());





}

__main__();