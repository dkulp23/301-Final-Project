(function(module) {

  var Carrier = function(obj) {
    this.carrier_id = obj.carrier_id;
    this.name = obj.name;
    this.number = obj.number;
    this.address = obj.address;
    this.city = obj.city;
    this.state = obj.state;
    this.zip = obj.zip;
    this.email = obj.email;
    Carrier.allCarriers.push(this);
  };

  Carrier.allCarriers = [ ];

  Carrier.getData = function() {
    $.getJSON('/carriersDB', function(data) {
      console.log(data.rows, 'data');
      data.rows.forEach(function(ele) {
        var newCarrier = new Carrier(ele)
        console.log(ele, 'ele');
        console.log('getData function successful')
      })
    });
  };

  Carrier.getData();
  module.Carrier = Carrier;
})(window);
