'use strict';

(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    $('.page-content').hide();
    $('#landingPage').show();
  };

  module.homeController = homeController;
})(window);
