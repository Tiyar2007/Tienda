let etiquetaBoton = document.getElementById("boton"); 

etiquetaBoton.addEventListener("click" , escuchar);

function escuchar(event) {
    event.preventDefault();
    console.log("Hizo click");
    let empanada = document.getElementById("empanada").value;
    console.log(empanada)
    let cantidad = document.getElementById("cantidad").value;
    console.log(cantidad)
    let nombre = document.getElementById("nombre").value;
    console.log(nombre)
    let cc = document.getElementById("cc").value;
    console.log(cc)
    let correo = document.getElementById("correo").value;
    console.log(correo)
}





