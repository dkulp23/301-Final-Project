'use strict';

(function(module) {
  var carrierRegisterView = {};

  carrierRegisterView.reveal = function (ctx, next) {
    $('.page-content').hide();
    $('#registerCarrier').fadeIn(400);
    next();
  };

  carrierRegisterView.submit = function (ctx, next) {
    $('.page-content').hide();
    $('#carrierInfo')[0].reset();
    $('#confirmRegistration').fadeIn(500);
    // next();
  }

  module.carrierRegisterView = carrierRegisterView;
})(window);
