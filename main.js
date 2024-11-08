// Inicializar el mapa en Oruro, Bolivia
const map = L.map('map').setView([-17.9647, -67.1067], 13);

// Añadir un mapa base (puedes usar OpenStreetMap u otro proveedor)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Cargar datos GeoJSON (por ejemplo, rutas o puntos de interés)
fetch('data/puntos.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);
    });




// Añadir un mapa base desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Añadir un marcador de ejemplo en Oruro
L.marker([-17.9647, -67.1067]).addTo(map)
    .bindPopup('Oruro, Bolivia')
    .openPopup();