var escultura = function(material, epoca){
    this.material = material;
    this.epoca = epoca;
}

for (id in Arte.prototyoe) {
    escultura.prototype[id] = Arte.prototype[id];
}

escultura.prototype.toString = function () {
    let  resultado;
    resultado = 
        "Nombre: " + this.nombre +
        "\nMaterial: " + this.material +
        "\nÉpoca: " + this.epoca;
    return resultado;
}