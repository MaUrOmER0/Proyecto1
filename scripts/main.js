// Función para enviar información
function enviarInformacion() {
    // Recoge los datos del formulario
    const campoTexto = document.getElementById("campoTexto").value;
    const areaTexto = document.getElementById("areaTexto").value;
    const password = document.getElementById("password").value;
    const listaSimple = document.getElementById("listaSimple").value;

    const radios = document.querySelectorAll('input[name="animalRadio"]');
    let radioSeleccionado;
    for (const radio of radios) {
        if (radio.checked) {
            radioSeleccionado = radio.value;
            break;
        }
    }

    const checkboxes = document.querySelectorAll('input[name="tamaño"]:checked');
    const checkboxSeleccionados = [];
    checkboxes.forEach((checkbox) => {
        checkboxSeleccionados.push(checkbox.value);
    });

    // Muestra la información recogida en una alerta
    alert(`
        Texto: ${campoTexto}
        Área de texto: ${areaTexto}
        Contraseña: ${password}
        Opción de selección: ${listaSimple}
        Radio seleccionado: ${radioSeleccionado}
        Checkboxes seleccionados: ${checkboxSeleccionados.join(", ")}
    `);
}

// Función adicional para mostrar alerta
function mostrarAlerta() {
    alert("Has hecho clic en el botón adicional.");
}