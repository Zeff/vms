$(function () {

    function initMap() {

        var location = new google.maps.LatLng(50.0875726, 14.4189987);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});
