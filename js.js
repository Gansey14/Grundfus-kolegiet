const homebutton = document.getElementById("homebutton");
const contactbutton = document.getElementById("contactbutton");
const tapicon = document.getElementById("tapicon");
const addresscontainer = document.querySelector(".address");

addresscontainer.addEventListener("click", function () {
    tapicon.style.display = "none";
})

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fuc2V5MTQiLCJhIjoiY2w5Z3FhbDg2MDd6NTN1bzAzdThpd2I2biJ9.KrSKpe-UlwN1yhq5z2271w';
const monument = [10.224295, 56.164352];
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/gansey14/cl9gqfclz008715pu4jr93219',
    center: monument,
    zoom: 15
});

// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Søren Frichs Vej 50, 8230 Aarhus'
);

// create DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
    .setLngLat(monument)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

