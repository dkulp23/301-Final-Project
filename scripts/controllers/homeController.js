'use strict';

(function(module) {
  var homeController = {};

  homeController.reveal = function(ctx, next) {
    $('.page-content').hide();
    $('#landingPage').show();
    next();
  };

  module.homeController = homeController;
})(window);
