(function(module) {

const mapView = {}

mapView.getCarrierInfo = function() {
  Carrier.getData()
}

mapView.carrierPins = function() {
  async.each(Carrier.allCarriers, function(ele) {
    var geocoder = new google.maps.Geocoder();
    var map = map;
    (function carrierPin() {
      var address = ele.address
      geocoder.geocode({
        address: address
      },
      function(res, status) {
        console.log('res: ' , res)
        console.log('status: ' , status);
        if (status == 'OK') {
          var marker = new google.maps.Marker({
            map: map,
            position: res[0].geometry.location
          })
        } else {
          alert('Address not found ' + status)
        }
      }
      );
    })()
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
