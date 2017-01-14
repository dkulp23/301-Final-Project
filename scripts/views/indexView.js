'use strict';
(function(module) {

  var indexView = {};

  var template = Handlebars.compile($('#registeredTemplate').text());

  var initialLoad = function (event) {
    $('.page-content').hide();
    $('#landingPage').show();
    Carrier.getData();
  };
  initialLoad();

  //**This function is being commented out, so page.js uses the routes file instead -MM**

  // var handleTheSectionView = function () {
  //   $('#nav-bar').on('click', '.nav-item', function(event) {
  //     event.preventDefault();
  //     $('.page-content').hide();
  //     $(`#${$(this).data('content')}`).fadeIn(400);
  //   });
  // }
  //
  // handleTheSectionView();

  var handleTheReportODButton = function () {
    $('#reportOD').on('click', function(event) {
      event.preventDefault();
      $('.page-content').hide();
      $('#informational').fadeIn(400);
    });
  };
  handleTheReportODButton();

  var handleTheRegisterButton = function () {
    $('#register').on('click', function(event) {
      event.preventDefault();
      $('.page-content').hide();
      $('#registerCarrier').fadeIn(400);
      var el = $(this);
      el.addClass('is-pressed');
    });
  };
  handleTheRegisterButton();

  var handleTheYesReportODButton = function () {
    $('#yesReportOD').on('click', function(event) {
      event.preventDefault();
      $('.page-content').hide();
      $('#mapSection').fadeIn(200);
      $('#carrierResults').fadeIn(200);
      initMap();
      mapView.carrierPins();
      Carrier.getEmails();
      populateList();
    });
  };
  handleTheYesReportODButton();

  var handleInfoFormSubmit = function () {
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
      };
      Carrier.postData(carrierData);
      $('.page-content').hide();
      $('#carrierInfo')[0].reset();
      $('#confirmRegistration').fadeIn(500);
      // TODO investigate the serialize method of jQuery for form data submission
    });
  };
  handleInfoFormSubmit();

})(window);
