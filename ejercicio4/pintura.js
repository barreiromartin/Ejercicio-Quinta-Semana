var pintura = function(autor, estilo){
    this.autor = autor;
    this.estilo = estilo;
}

for(id in Arte.prototype){
    pintura.prototype[id] = Arte.prototype[id];
}

pintura.prototype.toString = function() {
    let resultado;
    resultado = 
        "Nombre: " + this.nombre +
        "\nAutor: " + this.autor +
        "\nEstilo: " + this.estilo;
    return resultado;
}