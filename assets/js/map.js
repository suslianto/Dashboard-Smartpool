//  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 
var map = L.map('map', {zoomControl: false }, {scrollWheelZoom:true }).setView([-0.4251197,116.9913079], 15);

//  add base map tiles from OpenStreetMap and attribution info to 'map' div
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create custom icon
var tagIcon = L.icon({
    iconUrl: '/assets/img/tag-map.png',
    iconSize: [35, 40], // size of the icon
    popupAnchor: [0,-15]
    });

// create popup contents
var customPopup = "<b>AREA PINTU MASUK</b><br/><img src='assets/img/cctv.jpg' width='400px'/>";

// specify popup options 
var customOptions =
    {
    'maxWidth': '500',
    'className' : 'custom'
    }
