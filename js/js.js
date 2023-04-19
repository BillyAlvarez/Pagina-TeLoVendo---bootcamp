function validarCampos(){
   var textArea =  document.getElementById("textArea").value;
   var campoNombre =  document.getElementById("campoNombre").value;
   var campoCorreo =  document.getElementById("campoCorreo").value;

   
   if (campoNombre=== ''){
    alert('debe ingresar el campo nombre')
   }
   if (campoCorreo=== ''){
    alert('debe ingresar el campo correo')
   }
   if (textArea=== ''){
    alert('debe ingresar el campo mensaje')
   }
}

let table = new DataTable('#myTable');

