let marker = [];
let map;

function initMap(){
    const posicion = {
        lat: -34.635371,
        lng: -58.520353
    }

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: posicion
    })

    posiciones.map((posicion, index) => {
        marker[index] = new google.maps.Marker({
            position: { lat: posicion.lat, lng: posicion.lng},
            map: map,
            title: posicion.title
        })
    })

}

const posiciones = [{
    title: 'Estadio Jose Amalfitani',
    lat: -34.635371,
    lng: -58.520353
}, {
    title: 'Facultad de Ciencias Economicas',
    lat: -31.654820, 
    lng: -60.708533
}, {
    title: 'Villa Gesell',
    lat: -37.261135,
    lng: -56.971819
}]