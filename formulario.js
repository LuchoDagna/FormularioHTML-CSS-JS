const submitFunction = (event)=>{
    if (!validarFormulario()) {
        event.preventDefault()
    }
    else{
        event.preventDefault()

        alert(
            `Los datos enviados fueron: \n` +
            "Nombre: " + document.getElementById("nombre").value +`\n`+
            "Apellido: " + document.getElementById("apellido").value +`\n`+
            "Documento: " + document.getElementById("documento").value +`\n`+
            "Email: " + document.getElementById("email").value +`\n`+
            "Edad: " + document.getElementById("edad").value +`\n`+
            "Actividad: " + document.getElementById("actividad").value +`\n`+
            "Nivel de Estudio: " + document.getElementById("nivelEstudio").value +`\n`
        )
    }
}

document.getElementById("formulario").addEventListener("submit",submitFunction)

function validarFormulario() {
    // Esto valida campos de texto
    const camposTexto = document.querySelectorAll(`input[type="text"]`)
    let validacionCorrecta= true;
    
    camposTexto.forEach(campo=>{
        let errorCampo= document.getElementById(`error`+campo.id.charAt(0).toUpperCase()+ campo.id.slice(1))
        if (campo.value.length == ``) {
            mostrarError(errorCampo, `Este campo es requerido`)
            validacionCorrecta=false
        }
        else if(campo.value.length>0 && campo.value.length <3){
            mostrarError(errorCampo, `Este campo debe tener al menos 3 caracteres`)
            validacionCorrecta=false
        }
        else{
            ocultarError(errorCampo)
        }
    })

// Este valida campos de email

    const email= document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail")

    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ .test(email.value)) {
        ocultarError(errorEmail)
    }
    else{
        mostrarError(errorEmail, `Ingrese un correo electronico válido`)
        validacionCorrecta = false
    }

    // Este valida edad

    const edad= document.getElementById("edad");
    const errorEdad = document.getElementById(`errorEdad`);

    if (edad.value <18) {
        mostrarError(errorEdad, `Debes ser mayor de 18 para registrarte`)
        validacionCorrecta = false
    }
    else{
        ocultarError(errorEdad)
    }

    // Validacion de la actividad

    const actividad = document.getElementById("actividad")
    const errorActividad = document.getElementById(`errorActividad`)

    if (actividad.value == "") {
        mostrarError(errorActividad, `Por favor seleccione una activdad`)
        validacionCorrecta= false;
    }
    else{
        ocultarError(errorActividad)
    }

    // Validacion de nivel de estudio
    const nivelEstudio = document.getElementById("nivelEstudio");
    const errorNivelEstudio= document.getElementById("errorNivelEstudio")

    if (nivelEstudio.value == ``) {
        mostrarError(errorNivelEstudio, `Por favor seleccione un nivel de estudio`)
        validacionCorrecta= false;
    }
    else{
        ocultarError(errorNivelEstudio)
    }

    // Validar terminos y condiciones

    const acpetoTerminos = document.getElementById("aceptoTerminos");
    const errorAceptoTerminos = document.getElementById("errorAceptoTerminos");

    if (acpetoTerminos.checked) {
       ocultarError(errorAceptoTerminos)
    }
    else{
         mostrarError(errorAceptoTerminos, `Debes aceptar terminos y condiciones`)
        validacionCorrecta= false
    }

    return validacionCorrecta //Esto dira si el formulario completo es o no valido
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display=`block`;
}
const ocultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display=`none`;
}