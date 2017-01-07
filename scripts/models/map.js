'use strict';

function initMap(pos) {

  var map = new google.maps.Map(document.getElementById('reportODMap'), {
    center: pos || {lat: 47.611435, lng: -122.330456},
    zoom: 10,
    styles: [{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#444444'}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#f2f2f2'}]},{'featureType':'landscape.man_made','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#eae9ed'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'landscape.natural.landcover','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'landscape.natural.terrain','elementType':'geometry','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'poi.park','elementType':'geometry.fill','stylers':[{'visibility':'on'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':-100},{'lightness':45}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'road','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road','elementType':'labels.text.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#b3dced'},{'visibility':'on'}]}]
  });

  var infoWindow = new google.maps.InfoWindow({content: 'You are here'});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos);

      var marker = new google.maps.Marker({
        position: pos,
        map: map
      });
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}

function renderMap() {
  $('#yesReportOD').on('click', function() {
    initMap();
  });
}

renderMap();
