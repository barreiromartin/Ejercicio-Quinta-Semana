var cine = function(duracion, genero) {
    this.duracion = duracion;
    this.genero = genero;
}

for (id in Arte.prototype) {
    cine.prototype[id] = Arte.prototype[id];
}

cine.prototype.toString = function() {
    let resultado;
    resultado = 
        "Nombre: " + this.nombre +
        "\nDuracion: " + this.duracion +
        "\nGénero: " + this.genero;
    return resultado;
}