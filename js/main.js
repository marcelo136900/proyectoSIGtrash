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