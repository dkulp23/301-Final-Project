(function(module) {

const mapView = {}

mapView.setMaptoGeoLoc = function(ctx, next) {
  var pos = JSON.parse(localStorage.getItem('userLocation'));
  console.log('mapView pos', pos);
  console.log('mapView ctx', pos);
}

mapView.carrierPins = function(ctx, next) {
  console.log('inside carrierPins');
  console.log('map', map);
  console.log('carriers array', Carrier.allCarriers);
  Carrier.allCarriers.forEach(function(ele) {
    console.log('pins ele', ele)
    var geocoder = new google.maps.Geocoder()
    geocoder.geocode(
      { 'address': ele.address + ' ' + ele.zip
      }, function(results, status) {
          if (status == 'OK') {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            var infoWindow = new google.maps.InfoWindow({
              content:  '<div class="carrier-pin-div"><p class="carrier-pin-text">' + ele.name + '</p>' +
                        '<p class="carrier-pin-window">' + ele.number + '</p></div>'
            })
            marker.addListener('click', function() {
              infoWindow.open(map, marker)
            })
          } else {
            alert('Address not found: ' + status);
          }
        }
      );
    })
  }

  mapView.showMap = function(ctx, next) {
    $('.page-content').hide();
    $('#mapSection').show();
    next();
  };

module.mapView = mapView
})(window);
