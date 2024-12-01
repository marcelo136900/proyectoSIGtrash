// Inicializar el mapa centrado en Oruro
const map = L.map('map').setView([-17.9647, -67.1067], 13);

// Añadir mapa base OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Añadir un marcador para un punto crítico de acumulación de basura
const puntoCritico = L.marker([-17.9710, -67.1100], {title: "Punto Crítico 1"})
    .bindPopup("<b>Punto Crítico 1</b><br>Cantidad de basura: Alta.")
    .addTo(map);

// Añadir una ruta de recolección (ejemplo con polyline)
const rutaRecoleccion = [
    [-17.9647, -67.1067],
    [-17.9700, -67.1085],
    [-17.9710, -67.1100]
];
L.polyline(rutaRecoleccion, {color: 'blue'}).addTo(map);

// Añadir popups y funcionalidades de zoom
puntoCritico.on('click', function () {
    map.setView(puntoCritico.getLatLng(), 16);
});

//dirigir a seccion de la pagina
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Selecciona el botón
const backToTop = document.getElementById('backToTop');

// Mostrar/ocultar el botón según el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Si se scrollea más de 300px
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Volver al inicio al hacer clic
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efecto de desplazamiento suave
    });
});