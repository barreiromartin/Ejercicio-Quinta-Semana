function crearUsuario(nombre, email, direccion, telefono){

    var usuario = function(nombre, email, direccion, telefono){
        
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;

        this.getNombre = function(){
            return this.nombre;
        }
        this.cambiarNombre = function(nombre){
            this.nombre = nombre;
        }

        this.getEmail = function(){
            return this.email;
        }
        this.cambiarEmail = function(email){
            this.email = email;
        }

        this.getDireccion = function(){
            return this.direccion;
        }
        this.cambiarDireccion = function(direccion){
            this.direccion = direccion;
        }

        this.getTelefono = function(){
            return this.telefono;
        }
        this.cambiarTelefono = function(telefono){
            this.telefono = telefono;
        }

        this.toString = function() {
            let resultado = "";

            resultado =
                "Nombre: " + this.nombre +
                "\nEmail: " + this.email +
                "\nDirección: " + this.direccion +
                "\nTeléfono: " + this.telefono;

            return resultado;
        }
    }

    let nuevo_usuario = 0;
    nuevo_usuario = new usuario(nombre, email, direccion, telefono);

    return nuevo_usuario;

}