'use strict';

(function(module) {
  var carrierRegisterView = {};

  carrierRegisterView.reveal = function (ctx, next) {
    $('.page-content').hide();
    $('#registerCarrier').fadeIn(400);
    next();
  };

  module.carrierRegisterView = carrierRegisterView;
})(window);
