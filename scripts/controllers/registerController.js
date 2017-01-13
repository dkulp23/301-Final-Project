'use strict';

(function(module) {
  const registrationController = {};

  registrationController.handleInfoFormSubmit = function () {
    $('#carrierInfo').submit(function(event) {
      event.preventDefault();
      var carrierData = {
        name: $(this).find('#name').val(),
        number: parseInt($(this).find('#number').val()),
        address: $(this).find('#address').val(),
        city: $(this).find('#city').val(),
        state: $(this).find('#state').val(),
        zip: parseInt($(this).find('#zip').val()),
        email: $(this).find('#email').val()
      }
      console.log(carrierData);
      Carrier.postData(carrierData);
      $('.page-content').hide();
      $('#carrierInfo')[0].reset();
      $('#confirmRegistration').fadeIn(500);
      // TODO investigate the serialize method of jQuery for form data submission
    });
  }
  handleInfoFormSubmit();
  module.registrationController = registrationController;
})(window);
