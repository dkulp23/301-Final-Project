(function(module) {

const mapView = {}

mapView.getCarrierInfo = function() {
  Carrier.getData(Carrier.getEmails)
}

mapView.carrierPins = function(map) {
  var geocoder = new google.maps.Geocoder()
  Carrier.allCarriers.forEach(function(ele) {
    geocoder.geocode(
      { 'address': ele.address + ' ' + ele.zip
      }, function(results, status) {
          if (status == 'OK') {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
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
