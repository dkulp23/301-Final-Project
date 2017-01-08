'use strict';

function initMap(pos) {

  var map = new google.maps.Map(document.getElementById('reportODMap'), {
    center: pos || {lat: 47.611435, lng: -122.330456},
    zoom: 10,
    styles: [{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#444444'}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#f2f2f2'}]},{'featureType':'landscape.man_made','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#eae9ed'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'landscape.natural.landcover','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'landscape.natural.terrain','elementType':'geometry','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'poi.park','elementType':'geometry.fill','stylers':[{'visibility':'on'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':-100},{'lightness':45}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'road','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road','elementType':'labels.text.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#b3dced'},{'visibility':'on'}]}]
  });

  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });

  var infoWindow = new google.maps.InfoWindow(
    {
      content: 'You are here'
    }
  );

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  // var getAddress = function(pos){
  //   var geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({
  //     'location': pos
  //   },
  //   function(results, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {
  //       console.log(results[0].formatted_address);
  //       return results[0].formatted_address;
  //     }
  //     else {
  //       return 'Unable to retrieve your address';
  //     }
  //   });
  // };

  // var address = getAddress({lat: 47.611435, lng: -122.330456});

  if (navigator.geolocation)
  {
    // var positionOptions = {
    //   enableHighAccuracy: true
    // };
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: pos,
        radius: position.coords.accuracy,
        map: map,
        fillColor: '#0000FF',
        fillOpacity: 0.1,
        strokeColor: '#0000FF',
        strokeOpacity: 0.3
      });

      var address = function(pos){
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'location': pos
        },
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            console.log(results[0].formatted_address);
            return results[0].formatted_address;
          }
          else {
            return 'Unable to retrieve your address';
          }
        });
      };

      marker.setPosition(pos);
      map.fitBounds(circle.getBounds());
      console.log(pos);
      console.log(address(pos));
      infoWindow.setContent(address(pos));
    },
    function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  }
  else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, center) {
    infoWindow.setPosition(center);
    infoWindow.setContent(browserHasGeolocation ?
      '<h3 style="text-align:center">Error: The Geolocation service failed.<br>Please type in address or landmark.</h3>' :
      '<h3 style="text-align:center>Error: Your browser doesn\'t support geolocation.<br>Please type in address or landmark.</h3>');
    infoWindow.open(map, marker);
  }
};

function renderMap() {
  $('#yesReportOD').on('click', function() {
    initMap();
  });
}

renderMap();
