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
  Carrier.allEmails = [ ];

  Carrier.getData = function() {
    $.getJSON('/carriersDB')
    .then(function(data) {
      data.rows.forEach(function(ele) {
        var newCarrier = new Carrier(ele);
      });
    });
  };
// TODO finish grbbing the content from the form and matching it up to the data key

  Carrier.postData = function(obj) {
    $.ajax({
      url: '/carriersDB',
      method: 'POST',
      data: obj
    });
  };
  // TODO: MOVE this function call to the one of the VIEW files Carrier.getData();
  Carrier.getEmails = function() {
    Carrier.allCarriers.map(function(obj){
      Carrier.allEmails.push(obj.email);
    });
  };

  // Carrier.sendAlertEmails = function(obj) {
  //   console.log(obj);
  //   $.ajax({
  //     url: '/email',
  //     method: 'GET',
  //     data: obj
  //   });
  // };

  Carrier.sendEmails = function() {
    Carrier.getEmails();
    console.log(Carrier.allEmails);
    $.ajax({
      url: '/email',
      data: JSON.stringify(Carrier.allEmails)
    });
  };

  module.Carrier = Carrier;
})(window);
