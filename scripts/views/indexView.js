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
    });
  }
  handleTheYesReportODButton();

  var handleInfoFormSubmit = function () {
    $('#carrierInfo').submit(function(event) {
      event.preventDefault();
      let myData = {
        name: $(this).find('#carrierName').val(),
        email: $(this).find('#carrierEmail').val(),
        address: $(this).find('#carrierAddress').val(),
        phone: $(this).find('#carrierPhone').val(),
        license: $(this).find('#carrierLicense').val()
      }
      console.log(myData)
      //Carrier.postData(myData);
      // $(this).find('input:text').each(function(index, ele) {
      //   console.log($(ele).attr('name');
      //   console.log($(ele).val());
      // })
      // $.ajax {
      //       url: ./models/carrierDB.js,
      //       method: ‘POST’,
      //       })
      //       .then(CarrierDB.post())

  // TODO reference the post method in carrierDB.js
    });
  }
  handleInfoFormSubmit();

})(window);
