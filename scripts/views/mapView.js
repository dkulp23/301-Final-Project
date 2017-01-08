(function(module) {

const mapView = {}

mapView.getCarrierInfo = function() {
  Carrier.getData()
}

mapView.carrierPins = function() {
  Carrier.allCarriers.forEach(function(ele) {
    console.log('inside for each', ele);
    var geocoder = new google.maps.Geocoder()
    var map = map
    function carrierPin() {
      var address = ele.address + ' ' + ele.zip
      console.log('address: ', address)
      geocoder.geocode({
        'address': address
      },
      function(res, status) {
        console.log('res: ' , res[0].geometry.location)
        console.log('status: ' , status);
        if (status === 'OK') {
          var marker = new google.maps.Marker({
            map: map,
            position: res[0].geometry.location
          })
        } else {
          alert('Address not found ' + status)
        }
      }
      );
    }
    carrierPin()
  })
}
  //   var carrierInfo = {
  //     name: ele.name,
  //     address: ele.address
  //   }
  //   return carrierInfo
  // })

mapView.getCarrierInfo()

module.mapView = mapView
})(window);
