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
  };

  Carrier.allCarriers = [ ];

  Carrier.getData = function() {
    $.getJSON('/carriersDB', function(data) {
      JSON.stringify(data);
    });
  };

  module.Carrier = Carrier;
})(window);
