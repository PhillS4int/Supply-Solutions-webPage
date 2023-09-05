//----------------- Carrusel de productos (slider) --------------

/* Aquí se utiliza un plugin de jQuery para acoplar el funcionamiento del slide de productos de la tienda. El plugin es "Owl Carousel" Se descarga y se copian los estilos predeterminados de CSS y el <script> en la página "tienda.html" => https://owlcarousel2.github.io/OwlCarousel2/index.html   */

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1, // Muestra 1 producto en pantalla en resoluciones menores a 768 px.
        },
        768: {
            items: 2, // Muestra 2 productos por pantalla a partir de 768 px.   
        },
        1100: {
            items: 3, // Muestra 3 productos por pantalla en resoluciones a partir de 1100 px.
        },
        1400: {
            items: 4, // Muestra 4 productos por pantalla a partir de resoluciones de 1400 px.
            loop: false
        }
    }
});

/* La función hace que el carrusel de productos se adapte a cada tamaño de página, permitiendo así lo siguiente:

- Mostrar 4 productos en pantalla, si la resolución es de 1400 px o mayor.
- Mostrar 3 productos en pantalla si la recolución es de 1100 px hasta 1400 px.
- Mostrar 2 productos en pantalla si la resoulución es de 768 px hasta 1100 px.
- Mostrar 1 producto por pantalla si la resolucion en pantalla es menor a  768 px.  */


//----------------------Carrusel de imágenes al inicio de la página --------------------

const carouselElement = document.querySelector('#carouselProducts')

const carousel = new bootstrap.Carousel( carouselElement, {
    interval: 1000,
    touch: false
});
