(function(module) {

const mapView = {}

mapView.getCarrierInfo = function() {
  console.log('Carrier.allCarriers', Carrier.allCarriers)
  Carrier.getData(Carrier.getEmails)
}

mapView.carrierPins = function(map) {
  Carrier.allCarriers.forEach(function(ele) {
    var geocoder = new google.maps.Geocoder()
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
