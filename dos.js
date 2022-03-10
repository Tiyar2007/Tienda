let etiquetaBoton = document.getElementById("boton"); 

etiquetaBoton.addEventListener("click" , escuchar);

function escuchar(event) {
    event.preventDefault();
    console.log("Hizo click");
    let tribuna = document.getElementById("tribuna").value;
    console.log(tribuna)
    let cantidad = document.getElementById("cantidad").value;
    console.log(cantidad)
    let cc = document.getElementById("cc").value;
    console.log(cc)
    let nombre = document.getElementById("nombre").value;
    console.log(nombre)
    let apellido = document.getElementById("apellido").value;
    console.log(apellido)
    let correo = document.getElementById("correo").value;
    console.log(correo)
}