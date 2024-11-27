document.getElementById("encuesta-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Mostrar overlay de agradecimiento
    document.getElementById("agradecimiento").style.display = "flex";

    // Limpiar el formulario
    e.target.reset();
});

// Temporizador para mostrar el tiempo restante de las promociones
function actualizarContador() {
    const tiempoRestante = document.getElementById("tiempo-restante");
    const fechaLimite = new Date("2024-11-30T23:59:59"); // Fecha límite para la promoción

    const intervalo = setInterval(function() {
        const ahora = new Date();
        const diferencia = fechaLimite - ahora;

        if (diferencia <= 0) {
            clearInterval(intervalo);
            tiempoRestante.textContent = "La promoción ha terminado.";
        } else {
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            tiempoRestante.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }
    }, 1000);
}

// Iniciar contador
actualizarContador();
