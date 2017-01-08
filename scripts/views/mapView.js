(function(module) {

const mapView = {}

mapView.getCarrierInfo = function() {
  Carrier.getData()
  Carrier.allCarriers.map(function(ele){
    let carrierPins = {
      name: ele.name,
      address: ele.address
    }
    return carrierPins
  });
}

// mapView.carrierPins = function() {
//   Carrier.allCarriers.map(function(ele) {
//     var carrierInfo = {
//       name: ele.name,
//       address: ele.address
//     }
//     return carrierInfo
//   })
// }

mapView.getCarrierInfo()
// mapView.carrierPins()

module.mapView = mapView
})(window);
