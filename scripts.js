
//-------------------------------- P Á G I N A   L O G I N ----------------------------
/* FUNCIÓN PARA MOSTRAR U OCULTAR LA CONTRASEÑA DEL LOGIN CON EL ICONO/BOTÓN DEL OJO */

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('hide');
});

/* EXPICACIÓN => Se pueden utilizar los iconos de Font Awesome o cualquier otro icono, inclusive imágenes. La clase
"toggle-password" se agrega al <span> que actuará como botón para mostrar y ocultar la contraseña. La clase "hide" se
agrega al <span> cuando la contraseña está oculta, lo que cambia el icono de mostrar a ocultar.

Cuándo se hace clic en el <span> "TogglePassword, se cambia el atributo "type" del campo de entrada de "password" a "text" y visceversa, lo que muestra u aoculta la contraseña. También se alternan las clases "hide" en el <span> para cambiar e icono */

//------------------------------ P Á G I N A  R E G I S T R A R S E --------------------------------------

/* VER LA CONTRASEÑA PARA EL CAMPO "CONFIRMAR CONTRASEÑA" EN LA PÁGINA DE "REGISTRARSE" */

const seePassword =document.getElementById('seePassword');
const enterPassword = document.getElementById('confpassword');

seePassword.addEventListener('click', function() {
    const type = enterPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    enterPassword.setAttribute('type', type);
    this.classList.toggle('hide');
});

/* Script para hacer que un campo confirme la contraseña ingresada -  Confirmar contraseña */

const registrarse = document.getElementById('registrarse');
registrarse.addEventListener('submit', function(event) {

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confpassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor vuelve a escribir la contraseña');        
        event.preventDefault();//Evita que el formuario se envíe si las contraseñas no coinciden.
        document.getElementById('password').value = ''; //Limpia el campo de contraseña 
        document.getElementById('confpassword').value = ''; //Limpia el campo de confirmar contraseña.
    }
})

/* EXPLICACIÓN => Se agrega un evento de escucha "addEventListener" al formulario, cuando el usuario haga clic en el botón para enviar el formulario (en este caso para registrarse), se comparará el valor de ambos campos "Contraseña" y "Confirmar Contraseña", si los valores no coinciden se mostrará una alerta que le indicará al usuario que debe volver a ingresar correctamente la contraseña. */

/* ---------------------------------------------------------------------------- */

/* ********************************************************************** */

//---------------------------------- P Á G I N A * P R I N C I P A L -----------------------

//Slide de la sección => "¿Cómo podemos ayudarte?" y "Opiniones de nuestros clientes" (Pantallas medianas y pequeñas)

$(document).ready(function () {
    // Inicializar el carousel en pantallas pequeñas y medianas
    $('#ayuda .row').addClass('carousel slide');
    $('#ayuda .row').attr('data-ride', 'carousel');

    // Añadir los indicadores (puntos) al carousel para navegar entre los elementos.
    $('#ayuda .row').append('<ol class="carousel-indicators"></ol>');
    $('#ayuda .row .col-md-4').each(function (index) {
        var indicator = '<li data-target="#ayuda .row" data-slide-to="' + index + '"></li>';
        $('#ayuda .carousel-indicators').append(indicator);
    });

    // Añadir las clases necesarias para el efecto slide
    $('#ayuda .row .col-md-4').wrapAll('<div class="carousel-inner"></div>');
    $('#ayuda .carousel-inner').children().first().addClass('active');
    $('#ayuda .carousel-inner .col-md-4').addClass('carousel-item');
});

/* EXPLICACIÓN => Se utilizaron las grillas de Bootstrap para colocar cada uno de los artículos en 3 columnas para pantallas medianas y grandes ('col-md-4'), se han envuelto estos elementos en un "div" con la clase "carousel" para convertirlos en un slide en pantallas medianas y pequeñas */


//-------------------------  DESPLAZAMIENTO ENTRE SECCIONES CON EFECTO ------------------------

document.addEventListener("DOMContentLoaded", function() {

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

