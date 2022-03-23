var Arte = function(){}

Arte.prototype.nombre = "";
Arte.prototype.alabarObra = function() {
    let resultado = "";
    resultado = this.nombre + " es brutal";
    return resultado;
}