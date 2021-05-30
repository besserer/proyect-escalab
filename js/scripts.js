
  function validar (){
    var mostarAlert= false;

    var form = new Object();


    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre.length <= 0) {
      mostarAlert=true
      alert("El campo nombre esta vacio !")
      nombre = "";
      nombre.focus();
      datos["nombre"] = nombre;
      return false;
    }else if (email.length <= 0) {
        mostarAlert=true
        alert("El campo email esta vacio !")
        email = "";
        email.focus();
        datos["email"] = email;
    
        return false;
      } else if (telefono.length <= 0) {
      mostarAlert=true
      alert("El campo telefono esta vacio !")
      telefono = "";
      telefono.focus();
      datos["telefono"] = telefono;
      return false;
    }else if (mensaje.length <= 0) {
        mostarAlert=true
        alert("El campo mensaje esta vacio !")
        mensaje = "";
        mensaje.focus();
        datos["mensaje"] = mensaje;
        return false;
      }

   
      alert("Mensaje enviado exitosamente  !")

    console.log(form);
  }