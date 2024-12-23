(`# ENERGETIC TIGER`)

**Descripción:**
Energetic tiger es un ecommerce que ofrece bebidas energizantes con amplios gustos, actualmente se encuentra en trabajo para darle interactividad.
tiene 4 paginas la cuales son Home, Productos, Formulario, Cart.

**Uso:**
Actualmente funciona el home, la parte de productos y su formulario este puede ser enviado con formspree.

**Media queries**
max-width: 600px para poder visualizar en celulares.

(min-width: 768px) and (max-width: 1200px) setie esta medida para trabajar el responsive entre tablets.

**Nuevas funcionalidades con JS**
se creo un json para usar como api y poder utilziar fetch desde js para obtener los datos.

**script.js:**
Validacion de formularion tanto con el nombre como el mail.

**productos.js:**
Consumimos la API que en este caso seria un JSON LOCAL.
Creamos eventos para poder visualizar informacion adiccional a las cards.
Cuando agregamos al carrito nos devuelve un mensaje que se pudo agregar al carrito.
Eventos para agregar al carrito.

**cart.js**
A partir de los productos agregados al carrito ya podemos visualizarlo en la pestaña de cart.html.
Se agrego condiciones donde el si el carrito no tiene productos va a decir que esta vacio.
Se añadio sus respectivas card con templates strings.
Se crea un "Total" donde se va actualizando todo el tiempo ya sea agregando productos o desde la cart sumando o restando stock actualizandose al instante.
Se añadio botones donde se puede sumar y restar stock, eliminar un producto en su totalidad o vaciar el carrito.

**cart.css**
Se creo la hoja de stilo para los elementos añadidos al carrito.

**footer.css**
Se modifico un error en el responsive de footer donde el main se sobreponia delante del footer.

**HTML**
Se arreglaron errores de linkeo entre rutas de html.

