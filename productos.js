// Consumimos los productos del JSON.
fetch()
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(productos => {
        mostrarProductos(productos);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function mostrarProductos(productos) {
    const contenedor = document.getElementById('product-container');

    // Recorremos todos los elementos de productos y creamos una card por cada uno.
    productos.forEach(function (producto) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <span>$${producto.precio.toLocaleString()}</span>
            <button class="agregar-al-carrito" data-id="${producto.nombre}">Agregar al carrito</button>
            <div class="product-description" style="display: none;">
                <p>${producto.descripcion}</p>
            </div>
            <div class="cart-message" style="display: none;">Producto agregado al carrito</div>
        `;
        contenedor.appendChild(card);
        
        const button = card.querySelector('.agregar-al-carrito');
        const message = card.querySelector('.cart-message'); 
        // con el evento click sobre el boton evitamos que tamiben se abre el mensaje de cada producto
        button.addEventListener('click', function (event) {
            event.stopPropagation(); 
            agregarAlCarrito(producto); 

            message.textContent = `${producto.nombre} agregado al carrito`;
            message.style.display = 'block'; 

            setTimeout(() => {
                message.style.display = 'none';
            }, 2000);
        });
            // si hacemos click en cualquier parte de la card menos en agregar al carrito mostrara el respectivo mensaje.
        card.addEventListener('click', function (event) {
            if (event.target.classList.contains("agregar-al-carrito")) {
                return;
            }
            const descripcion = card.querySelector('.product-description');
            const isVisible = descripcion.style.display === 'block';
            descripcion.style.display = isVisible ? 'none' : 'block';
        });
    });
}

        // en caso de que se agregue un producto ya existe se remplazar pero su stock si se ira actualizando.
function agregarAlCarrito(producto) {
    console.log('Producto agregado al carrito:', producto);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);
    
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        
        producto.cantidad = 1;
        carrito.push(producto);
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
