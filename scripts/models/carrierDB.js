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
    $.getJSON('/carriersDB', function(data) {
      console.log(data.rows, 'data');
      data.rows.forEach(function(ele) {
        var newCarrier = new Carrier(ele);
        console.log(ele, 'ele');
        console.log('getData function successful');
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
  }
  Carrier.getEmails();
  module.Carrier = Carrier;
})(window);
