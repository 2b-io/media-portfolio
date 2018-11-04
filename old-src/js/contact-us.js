import 'stylus/contact-us.styl'

window.addEventListener('load', function myMap() {
  var myCenter = new google.maps.LatLng(21.0162737,105.7791612);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 16};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
})
