// -------> Google maps


function initMap() {
  // The location of salon matin
  var aarhus = {lat: 56.146301, lng: 10.193522};
  // The map, centered at Aarhus
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 20, center: aarhus});
  // The marker, positioned in Aarhus
  var marker = new google.maps.Marker({position: aarhus, map: map});
}


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

});

// Swiper initiliaze

var swiper = new Swiper('.swiper-container', {
  observer: true,
  observeParents: true,
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: false,
    slideShadows: false,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
