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

  Carrier.getData = function(callback) {
    $.getJSON('/carriersDB')
    .then(function(data) {
      data.rows.forEach(function(ele) {
        var newCarrier = new Carrier(ele);
      });
      callback();
    });
  };

  Carrier.postData = function(obj) {
    $.ajax({
      url: '/carriersDB',
      method: 'POST',
      data: obj
    });
  };

  Carrier.getEmails = function () {
    console.log('getEmails function', Carrier.allCarriers);
    [1,2,3,4].map(function(ele) {
      console.log('ele', ele);
    });
    var emails = Carrier.allCarriers.map(function(ele) {
      console.log(ele);
      return ele.email;
    });
    console.log('emails', emails);

    $.ajax({
      url: '/email',
      method: 'get',
      data: emails
    });
  };

  module.Carrier = Carrier;
})(window);
