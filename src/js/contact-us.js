import 'stylus/contact-us.styl'

// if HTML DOM Element that contains the map is found...
if (document.getElementById('map-canvas')){

    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(21.0162737,105.7791612);

    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({position:myLatlng});
  marker.setMap(map);
}
