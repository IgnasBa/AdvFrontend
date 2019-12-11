  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);

  });
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.pushpin');
    var instances = M.Pushpin.init(elems, {
        top: 767,
        offset: 200
    });
  });

// -------> Google maps


function initMap() {
  // The location of Aarhus
  var aarhus = {lat: 56.146301, lng: 10.193522};
  // The map, centered at Aarhus
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 20, center: aarhus});
  // The marker, positioned in Aarhus
  var marker = new google.maps.Marker({position: aarhus, map: map});
}
