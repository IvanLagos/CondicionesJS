const miImagen = document.getElementById('miImagen');
const btnCambiarColor = document.getElementById('btnCambiarColor');
let colorAplicado = false; // Variable para saber si ya aplicamos el color

btnCambiarColor.addEventListener('click', () => {
    if (!colorAplicado) {
        miImagen.style.border = '2px solid red';
        colorAplicado = true;
    } else {
        miImagen.style.border = 'none';
        colorAplicado = false;
    }
});

function sumarInputs() {
    const input1 = parseInt(document.getElementById('inputSticker1').value) || 0;
    const input2 = parseInt(document.getElementById('inputSticker2').value) || 0;
    const input3 = parseInt(document.getElementById('inputSticker3').value) || 0;

    const sumaTotal = input1 + input2 + input3;
    const respuesta = document.getElementById('respuestaVerificar');

    if (sumaTotal < 0) {
        respuesta.innerHTML = "No se pueden seleccionar numeros negativos xd";
    } 
    else if (sumaTotal == 0) {
        respuesta.innerHTML = "Aun no seleccionas un producto";
    }
    else if (sumaTotal >= 1 && sumaTotal <=10) {
        respuesta.innerHTML = "Tus productos ya fueron seleccionados!";
    }
    else {
        respuesta.innerHTML = "No queda suficiente Stock :C";
    }
}

document.getElementById('miBoton').addEventListener('click', sumarInputs);


function verificacionDeClaves() {
    const password1 = (document.getElementById('primerDigitoPassword').value);
    const password2 = (document.getElementById('segundoDigitoPassword').value);
    const password3 = (document.getElementById('tercerDigitoPassword').value);

    const passwordTotal = password1 + password2 + password3;
    const clave = document.getElementById('verificacionPassword');

    if (passwordTotal === '911') {
        clave.innerHTML = "PASSWORD 1 - CORECTO";
        clave.style.color = 'green';
    } 
    else if (passwordTotal === '714') {
        clave.innerHTML = "PASSWORD 2 - CORECTO";
        clave.style.color = 'green';
    }
    else{
        clave.innerHTML = "PASSWORD - INCORRECTO";
        clave.style.color = 'red';
    }
}

document.getElementById('ingresarPassword').addEventListener('click', verificacionDeClaves);