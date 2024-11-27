
// Obtener elementos
const burgerMenu = document.querySelector('.burger-menu');
const navbarLinks = document.querySelector('.navbar ul');

// Función para alternar la visibilidad del menú
burgerMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


// Función para ajustar imágenes automáticamente sin tamaños fijos
window.addEventListener('resize', () => {
    const imagenes = document.querySelectorAll('img');
    imagenes.forEach(imagen => {
        imagen.style.width = '100%';  // Ocupa todo el ancho de su contenedor
        imagen.style.height = 'auto'; // Mantiene la proporción
    });
});

// Cálculo del pedido y funcionalidad del formulario
const precios = {
    hamburguesas: {
        "Clásica": 50,
        "Doble Queso": 70,
        "BBQ Especial": 90
    },
    bebidas: {
        "Coca-Cola": 20,
        "Agua": 10,
        "Limonada": 15
    }
};

// Mostrar resumen del pedido con cálculo del precio total
document.getElementById('resumenBtn').addEventListener('click', function () {
    const hamburguesa = document.getElementById('hamburguesa').value;
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    const bebida = document.getElementById('bebida').value;

    if (hamburguesa && cantidad && bebida) {
        // Obtenemos los precios
        const precioHamburguesa = precios.hamburguesas[hamburguesa];
        const precioBebida = precios.bebidas[bebida];

        // Calculamos el precio total
        const total = (precioHamburguesa + precioBebida) * cantidad;

        // Mostramos el resumen con el precio
        document.getElementById('detalles').textContent = 
            `Has pedido ${cantidad} ${hamburguesa}(s) con ${bebida}. ` +
            `El precio total es $${total.toFixed(2)} MXN.`;
        
        document.getElementById('resumen').classList.remove('hidden');
        document.getElementById('confirmacion').classList.add('hidden');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});


// Confirmación del pedido
document.getElementById('confirmarBtn').addEventListener('click', function () {
    document.getElementById('resumen').classList.add('hidden');
    document.getElementById('confirmacion').classList.remove('hidden');

    // Limpiar almacenamiento local
    localStorage.removeItem('pedido');
});

// Restablecer formulario
document.getElementById('pedidoForm').addEventListener('reset', function () {
    document.getElementById('resumen').classList.add('hidden');
    document.getElementById('confirmacion').classList.add('hidden');
    localStorage.removeItem('pedido');
});

// Recuperar datos del pedido si existen en localStorage
window.addEventListener('load', function () {
    const pedidoGuardado = JSON.parse(localStorage.getItem('pedido'));
    if (pedidoGuardado) {
        document.getElementById('hamburguesa').value = pedidoGuardado.hamburguesa;
        document.getElementById('cantidad').value = pedidoGuardado.cantidad;
        document.getElementById('bebida').value = pedidoGuardado.bebida;

        const resumenText =
            `Has pedido ${pedidoGuardado.cantidad} ${pedidoGuardado.hamburguesa}(s) con ${pedidoGuardado.bebida}. ` +
            `El precio total es $${pedidoGuardado.total.toFixed(2)} MXN.`;
        document.getElementById('detalles').textContent = resumenText;

        document.getElementById('resumen').classList.remove('hidden');
    }
});