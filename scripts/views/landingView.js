'use strict';
(function(module) {

  var indexView = {};

  var template = Handlebars.compile($('#registeredTemplate').text());

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

  // var handleTheReportODButton = function () {
  //   $('#reportOD').on('click', function(event) {
  //     event.preventDefault();
  //     $('.page-content').hide();
  //     $('#informational').fadeIn(400);
  //   });
  // }
  // handleTheReportODButton();

  var handleTheRegisterButton = function () {
    $('#register').on('click', function(event) {
      event.preventDefault();
      $('.page-content').hide();
      $('#registerCarrier').fadeIn(400);
    });
  }
  handleTheRegisterButton();

  // var handleTheYesReportODButton = function () {
  //   $('#yesReportOD').on('click', function(event) {
  //     event.preventDefault();
  //     $('.page-content').hide();
  //     $('#mapSection').fadeIn(400);
  //     $('#mapInfo').fadeIn(400);
  //   });
  // }
  // handleTheYesReportODButton();

  indexView.initalLoad = function(ctx, next) {
    $('.page-content').hide();
    $('#landingPage').show();
    next();
  };

  module.indexView = indexView;
})(window);
