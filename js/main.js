// Inicializar el mapa centrado en Oruro
const map = L.map("map").setView([-17.9647, -67.1067], 13);

// Añadir mapa base OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

//dirigir a seccion de la pagina
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Selecciona el botón
const backToTop = document.getElementById("backToTop");

// Mostrar/ocultar el botón según el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Si se scrollea más de 300px
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Volver al inicio al hacer clic
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Efecto de desplazamiento suave
  });
});

//ruta ficticia
const rutaFicticia = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [-67.06715901537021, -17.976461898873453],
          [-67.07125364757411, -17.975670432127345],
          [-67.07857694292532, -17.97430754746061],
          [-67.08499809319636, -17.97309608559371],
          [-67.09387446773287, -17.97142004974816],
          [-67.09397491493866, -17.971993327462897],
          [-67.0940297043238, -17.97259266126686],
          [-67.0932717844977, -17.972801124721414],
          [-67.09384303427444, -17.97520205736049],
          [-67.09485870443032, -17.978238331304183],
          [-67.09655148802268, -17.981458564796057],
          [-67.09887301780843, -17.984402724973037],
          [-67.10196839352068, -17.987254835151475],
          [-67.10491867349674, -17.989186883600198],
          [-67.10844933641842, -17.990566905254568],
          [-67.11265711277734, -17.99125691203335],
          [-67.11691328644348, -17.991394917023683],
          [-67.12073414083837, -17.99107291444757],
          [-67.1246517257241, -17.99029090574416],
          [-67.1278438374183, -17.98923289039348],
          [-67.13137450033997, -17.98753084926561],
          [-67.133937858352, -17.986196805555068],
          [-67.13446987605222, -17.98633481054354],
          [-67.13422804982518, -17.986932830918562],
          [-67.13503524029626, -17.98944158993568],
          [-67.1351276738799, -17.99016249143679],
        ],
        type: "LineString",
      },
    },
  ],
};

//agregar la ruta ficticia la mapa
L.geoJSON(rutaFicticia, {
  style: {
    color: "blue",
    weight: 4,
    opacity: 0.8,
  },
}).addTo(map);

//centrar el mapa en la ruta ficticia
const bounds = L.geoJSON(rutaFicticia).getBounds();
map.fitBounds(bounds);

//puntos de calor
var heat = L.heatLayer(
  [
    [-17.96998, -67.10615, 4.1], // Coordenadas en Oruro
    [-17.97077, -67.10639, 4.5],
    [-17.97201, -67.10452, 4.8],
  ],
  { radius: 30 }
).addTo(map);

// 1. Resaltar área al pasar el mouse
// Zona campero, brasil, 6 de agosto y bolivar
var polygonData1 = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-67.10396032679388, -17.97414561972981],
        [-67.10320876918982, -17.971663385332732],
        [-67.1063402592065, -17.970789630524337],
        [-67.10611061660525, -17.97001516242257],
        [-67.10817740001669, -17.969359840607467],
        [-67.10840704261794, -17.970193886132478],
        [-67.11117697148609, -17.969356302652002],
        [-67.11203259211464, -17.971733687191062],
        [-67.10999486403949, -17.972322673910256],
        [-67.10975844255016, -17.971401711992613],
        [-67.10768693997686, -17.972033535220817],
        [-67.10803244483998, -17.973058820294824],
        [-67.10396032679388, -17.97414561972981],
      ],
    ],
  },
  properties: { name: "zona campero, brasil, 6 de agosto y bolivar" },
};

var polygonLayer1 = L.geoJSON(polygonData1, {
  style: {
    color: "#3388ff",
    weight: 2,
  },
  onEachFeature: function (feature, layer) {
    layer.on({
      mouseover: function (e) {
        e.target.setStyle({
          weight: 5,
          color: "#FF5733",
          fillOpacity: 0.7,
        });
      },
      mouseout: function (e) {
        polygonLayer1.resetStyle(e.target);
      },
    });
  },
}).addTo(map);

// Mercado Fermin Lopez
var polygonData2 = {
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-67.11545675682623, -17.965169457942437],
        [-67.11634853058355, -17.96772661739095],
        [-67.11377660337182, -17.968562603797395],
        [-67.11283313258522, -17.96601775051556],
        [-67.11545675682623, -17.965169457942437],
      ],
    ],
  },
  properties: { name: "mercado fermin lopez" },
};

var polygonLayer2 = L.geoJSON(polygonData2, {
  style: {
    color: "#3388ff",
    weight: 2,
  },
  onEachFeature: function (feature, layer) {
    layer.on({
      mouseover: function (e) {
        e.target.setStyle({
          weight: 5,
          color: "#FF5733",
          fillOpacity: 0.7,
        });
      },
      mouseout: function (e) {
        polygonLayer2.resetStyle(e.target);
      },
    });
  },
}).addTo(map);

//mini mapa
var miniMapLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);
var miniMap = new L.Control.MiniMap(miniMapLayer, {
  toggleDisplay: true,
}).addTo(map);

//Agregar un control de escala
L.control
  .scale({
    metric: true,
    imperial: false,
  })
  .addTo(map);

/*/agregar marcador con popup
map.on("click", function (e) {
  var latlng = e.latlng;
  L.marker([latlng.lat, latlng.lng])
    .addTo(map)
    .bindPopup(
      "Coordenadas: " + latlng.lat.toFixed(5) + ", " + latlng.lng.toFixed(5)
    )
    .openPopup();
});*/

// Añadir un marcador para mercado campero
const puntoCritico = L.marker([-17.96678, -67.11470], {
  title: "Mercado campero",
})
  .bindPopup("<b>Mercado Campero</b><br>Cantidad de basura: Media")
  .addTo(map);

// Añadir popups y funcionalidades de zoom
puntoCritico.on("click", function () {
  map.setView(puntoCritico.getLatLng(), 16);
});

// Añadir un marcador para mercado bolivar
const puntoCritico2 = L.marker([-17.97222, -67.10506], {
  title: "Mercado campero",
})
  .bindPopup("<b>Mercado Bolivar</b><br>Cantidad de basura: Alta")
  .addTo(map);

// Añadir popups y funcionalidades de zoom
puntoCritico2.on("click", function () {
  map.setView(puntoCritico2.getLatLng(), 16);
});

//trazar ruta entre puntos
/*map.on('click',function (e){
  var endMarker=L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
});*/
L.Routing.control({
  waypoints:[
    L.latLng(-17.96678, -67.11470),
    L.latLng(-17.97222, -67.10506)
  ]
}).addTo(map);

L.Routing.control({
  waypoints: [
    L.latLng(-17.96678, -67.11470),
    L.latLng(-17.97222, -67.10506)
  ],
  routeWhileDragging: true,
}).addTo(map);