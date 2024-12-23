// Función para mostrar los productos del carrito en la página
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carrito-container');
    const totalContainer = document.getElementById('total-carrito');
    
    // Limpiamos el contenedor en caso de que haya productos anteriores (por recarga de página)
    carritoContainer.innerHTML = '';

    let total = 0;  // Variable para calcular el total de la compra

    // Si el carrito está vacío
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        totalContainer.innerText = '$0';  // Si el carrito está vacío, el total es 0
    } else {
        // Recorremos el carrito y mostramos los productos
        carrito.forEach(producto => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('producto-en-carrito');
            productDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.nombre}</p>
                <p>Precio: $${producto.precio.toLocaleString()}</p>
                <p>Total: $${(producto.precio * producto.cantidad).toLocaleString()}</p>
                <div>
                    <button class="cantidad-menor" data-nombre="${producto.nombre}">-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button class="cantidad-mayor" data-nombre="${producto.nombre}">+</button>
                </div>
                <button class="eliminar-producto" data-nombre="${producto.nombre}">Eliminar</button>
                <hr>
            `;
            carritoContainer.appendChild(productDiv);
            
            // Actualizamos el total
            total += producto.precio * producto.cantidad;
        });

        // Mostramos el total en la página
        totalContainer.innerText = `$${total.toLocaleString()}`;
    }

    
    agregarEventosEliminar();
    agregarEventosCantidad();
}

// Función para eliminar productos del carrito
function eliminarProductoDelCarrito(productoNombre) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.nombre !== productoNombre);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function agregarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll('.eliminar-producto');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function() {
            const productoNombre = boton.getAttribute('data-nombre');
            eliminarProductoDelCarrito(productoNombre);
        });
    });
}

// Funcion para agregar eventos a los botones de mas y menos
function agregarEventosCantidad() {
    const botonesMenor = document.querySelectorAll('.cantidad-menor');
    const botonesMayor = document.querySelectorAll('.cantidad-mayor');
    
    // Disminuir la cantidad
    botonesMenor.forEach(boton => {
        boton.addEventListener('click', function() {
            const productoNombre = boton.getAttribute('data-nombre');
            modificarCantidad(productoNombre, -1);  // Restar 1 a la cantidad
        });
    });
    
    // Aumentar la cantidad
    botonesMayor.forEach(boton => {
        boton.addEventListener('click', function() {
            const productoNombre = boton.getAttribute('data-nombre');
            modificarCantidad(productoNombre, 1);  // Sumar 1 a la cantidad
        });
    });
}

// Funcion para modificar la cantidad de un producto en el carrito
function modificarCantidad(productoNombre, cantidadCambio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Encontramos el producto que queremos actualizar
    const producto = carrito.find(producto => producto.nombre === productoNombre);
    
    // Si el producto se encuentra en el carrito actualizamos la cantidad
    if (producto) {
        producto.cantidad += cantidadCambio;
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(producto => producto.nombre !== productoNombre);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }
}

// Funcion para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

const botonVaciar = document.getElementById('vaciar-carrito');
botonVaciar.addEventListener('click', vaciarCarrito);


// Llamamos a la funcion para mostrar el carrito cuando se carga la pagina
window.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();  
});
