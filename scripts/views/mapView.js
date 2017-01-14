(function(module) {

const mapView = {}

mapView.carrierPins = function() {
  var carriers = JSON.parse(localStorage.getItem('carrier_info'));
  carriers.forEach(function(ele) {
    var geocoder = new google.maps.Geocoder()
    geocoder.geocode(
      { 'address': ele.address + ' ' + ele.zip
      }, function(results, status) {
          if (status == 'OK') {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            })
            var infoWindow = new google.maps.InfoWindow({
              content:  '<div class="carrier-pin-div"><p class="carrier-pin-text">' + ele.name + '</p>' +
                        '<p class="carrier-pin-window">' + ele.number + '</p></div>'
            })
            marker.addListener('click', function() {
              infoWindow.open(map, marker);
            });
          } else {
            alert('Address not found: ' + status);
          }
        }
      );
    })
  }

module.mapView = mapView
})(window);
