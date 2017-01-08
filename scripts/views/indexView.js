'use strict';
(function(module) {

  var indexView = {};

  var template = Handlebars.compile($('#registeredTemplate').text());

  var initialLoad = function (event) {
    $('.page-content').hide();
    $('#landingPage').show();
  };
  initialLoad();

  var handleTheSectionView = function () {
    $('#nav-bar').on('click', '.nav-item', function(event) {
      event.preventDefault();
      $('.page-content').hide();
      $(`#${$(this).data('content')}`).fadeIn(400);
    });
  }

  handleTheSectionView();

  var handleTheReportODButton = function () {
    $('#reportOD').on('click', function(event) {
      event.preventDefault();
      $('.page-content').hide();
      $('#informational').fadeIn(400);
    });
  }
  handleTheReportODButton();

  var handleTheRegisterButton = function () {
    $('#register').on('click', function(event) {
      event.preventDefault();
      $('.page-content').hide();
      $('#registerCarrier').fadeIn(400);
    });
  }
  handleTheRegisterButton();

  var handleTheYesReportODButton = function () {
    $('#yesReportOD').on('click', function(event) {
      event.preventDefault();
      $('.page-content').hide();
      $('#reportODMap').fadeIn(400);
      $('#mapInfo').fadeIn(400);
    });
  }
  handleTheYesReportODButton();

  var handleInfoFormSubmit = function () {
    $('#carrierInfo').submit(function(event) {
      event.preventDefault();
      // var values = [ ];
      // $(this).find('input:text').each(function(index, ele) {
      //   values.push($(ele).val());
      //})
      let carrierData = {
        name: $(this).find('#name').val(),
        number: parseInt($(this).find('#number').val()),
        address: $(this).find('#address').val(),
        city: $(this).find('#city').val(),
        state: $(this).find('#state').val(),
        zip: parseInt($(this).find('#zip').val()),
        email: $(this).find('#email').val(),
        license: $(this).find('#license').val(),
      }
      Carrier.postData(carrierData);
      // $.ajax {
      //       url: ./models/carrierDB.js,
      //       method: ‘POST’,
      //       })
      //       .then(CarrierDB.post())
  // TODO investigate the serialize method of jQuery for form data submission
  });
  }
  handleInfoFormSubmit();

})(window);
