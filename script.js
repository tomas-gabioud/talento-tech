// Validacion de formulario.

const form = document.getElementById("main_Form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById("name").value.trim();
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
    const email = document.getElementById("email").value.trim();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//Validacion para el nombre.
    if (nombre === "" || !regex.test(nombre)) {
    alert("Por favor escribe tu nombre con caracteres válidos.");
    //Validacion para el mail.
} if (email === "" || !regexEmail.test(email)) {
    alert("Por favor, introduce un correo electrónico válido.");
}else {
    
    form.submit(); 
}
});

