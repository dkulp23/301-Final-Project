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


  // var handleTheRegisterButtonButton = function () {
  //   $('#registerButton').on('click', function(event) {
  //     event.preventDefault();
  // // TODO reference the post method in carrierDB.js
  //   });
  // }
  //TODO: when submit/register button is clicked and all form inputs
  //are validated, fade in the #confirmRegistration section of index.html
  // handleTheRegisterButtonButton();

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
        email: $(this).find('#email').val(),
        // license: $(this).find('#license').val()
      }
      console.log(carrierData);
      Carrier.postData(carrierData);
      var newCarrier = new Carrier(carrierData);
  // TODO investigate the serialize method of jQuery for form data submission
  });
  }
  handleInfoFormSubmit();


})(window);
