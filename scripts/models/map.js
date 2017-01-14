'use strict';

var clippy = new Clipboard('.btn');

var whereAmI;

function initMap(pos) {

  $('#map-input').val('');

  var map = new google.maps.Map(document.getElementById('reportODMap'), {
    center: pos || {lat: 47.611435, lng: -122.330456},
    zoom: 10,
    styles: [{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#444444'}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#f2f2f2'}]},{'featureType':'landscape.man_made','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#eae9ed'}]},{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'landscape.natural.landcover','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'landscape.natural.terrain','elementType':'geometry','stylers':[{'visibility':'on'},{'color':'#d2e0b7'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'on'}]},{'featureType':'poi.park','elementType':'geometry.fill','stylers':[{'visibility':'on'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':-100},{'lightness':45}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'road','elementType':'geometry.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road','elementType':'labels.text.stroke','stylers':[{'visibility':'off'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#b3dced'},{'visibility':'on'}]}]
  });

  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    draggable: true
  });

  var infoWindow = new google.maps.InfoWindow({
    content: 'You are here'
  });

  var circle = new google.maps.Circle({
    center: null,
    radius: null,
    map: map,
    fillColor: '#0000FF',
    fillOpacity: 0.1,
    strokeColor: '#0000FF',
    strokeOpacity: 0.3
  });

  var input = document.getElementById('map-input');
  var searchBox = new google.maps.places.SearchBox(input);

//// WHY ISN'T THIS WORKING
  // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });


/////////////////////////////////////////// search box ///////////////////////////////////////////

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      circle.setMap(null);
      if (!place.geometry) {
        console.log('Returned place contains no geometry');
        return;
      }

      marker.setPosition(place.geometry.location);
      whereAmI = place.formatted_address;
      infoWindow.setContent(place.formatted_address + '<br><br><a id="copy" class="btn" style="text-align:center;display:block;" align="center" data-clipboard-text="' + whereAmI + '" href="javascript:void(0)">Copy address to clipboard</a>');
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
      bounds.extend(place.geometry.location);
    });
    map.fitBounds(bounds);
    map.setZoom(18);
  });
///////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////// geolocation ///////////////////////////////////////////
  if (navigator.geolocation)
  {
    // var positionOptions =
    // {
    //   enableHighAccuracy: true
    // };

    navigator.geolocation.getCurrentPosition(function(position) {
      var latLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var setCircle = function(pos) {
        circle.setCenter(pos);
        circle.set('radius', position.coords.accuracy);
      };

      var address = function(pos) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'location': pos
        },
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            console.log(results[0].formatted_address);
            marker.setPosition(pos);
            setCircle(pos);
            map.fitBounds(circle.getBounds());
            whereAmI = results[0].formatted_address;
            infoWindow.setContent(results[0].formatted_address + '<br><br><a class="btn" style="text-align:center;display:block;" align="center" data-clipboard-text="' + whereAmI + '" href="javascript:void(0)">Copy address to clipboard</a>');
          }
          else {
            return 'Unable to retrieve your address';
          }
        });
      };
      console.log(latLng);
      address(latLng);

/////m move this out of geolocation code?
      google.maps.event.addListener(marker, 'dragend', function() {
        var newLat = this.getPosition().lat();
        var newLng = this.getPosition().lng();
        var newPos = {
          lat: newLat,
          lng: newLng
        };
        console.log(newPos);
        address(newPos);
        // list.textContent = whereAmI;

        // mapView.carrierPins(map);
      });
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
    mapView.carrierPins(map);
  }
  // console.log('Marker is at: ' + whereAmI);
  // var test = document.getElementById('carrierList');
  // var list = document.createElement('p');
  // list.textContent = whereAmI;
  // test.append(list);

  mapView.carrierPins(map);
  clippy.destroy();
};
//////////////////////////////////////////////////////////////////////////////////////////////////

function renderMap() {
  $('#yesReportOD').on('click', function() {
    initMap();
    mapView.getCarrierInfo();
    populateList();
  });
}

renderMap();

// $('#copy').tooltip({
//   trigger: 'click',
//   placement: 'bottom'
// });
//
// function setTooltip() {
//   function setTooltip(message) {
//     $('#copy').tooltip('hide')
//     .attr('data-original-title', message)
//     .tooltip('show');
//   };
// };
//
// function hideTooltip() {
//   setTimeout(function() {
//     $('#copy').tooltip('hide');
//   }, 1000);
// };
//
// clippy.on('success', function(e) {
//   setTooltip('Copied!');
//   hideTooltip();
// });
//
// clippy.on('error', function(e) {
//   setTooltip('Failed!');
//   hideTooltip();
// });


// function copyAddress(loc) {
//   var copyEl = document.getElementById('copy');
// }
