var teatro = function(duracion, epoca) {
    this.duracion = duracion;
    this.epoca = epoca;
}

for (id in Arte) {
    teatro.prototype[id] = Arte.prototype[id];
}

teatro.prototype.toString = function () {
    let resultado;
    resultado = 
        "Nombre: " + this.nombre +
        "\nDuracion: " + this.duracion +
        "\nÉpoca: " + this.epoca;
    return resultado;
}