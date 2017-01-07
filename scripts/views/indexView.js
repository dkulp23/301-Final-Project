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
      var values = [ ];
      $(this).find('input:text').each(function(index, ele) {
        values.push($(ele).val());
      })
      let carrierData = {
        name: values[0],
        number: values[1],
        address: values[2],
        city: values[3],
        state: values[4],
        zip: values[5],
        email: values[6],
        license: values[7]
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
