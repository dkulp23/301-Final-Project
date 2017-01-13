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

  Carrier.getData = function(ctx, next) {
    $.getJSON('/carriersDB')
      .then(function(data) {
        data.rows.forEach(function(ele) {
          var newCarrier = new Carrier(ele);
        });
      // .then(function(){Carrier.getEmails();})
      // .then(function(){mapView.carrierPins();});
    });
    // next();
  };

  Carrier.postData = function(obj) {
    $.ajax({
      url: '/carriersDB',
      method: 'POST',
      data: obj
    });
  };

  // Carrier.getEmails = function () {
  //   var emails = Carrier.allCarriers.map(function(ele) {
  //     return ele.email;
  //   });
  //   $.ajax({
  //     url: '/email',
  //     method: 'POST',
  //     data: {
  //       emails: emails
  //     }
  //   });
  // };

  module.Carrier = Carrier;
})(window);
