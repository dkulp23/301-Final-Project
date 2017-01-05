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
})(window);
