'use strict';

(function(module) {
  var registerController = {};

  registerController.reveal = function () {
      $('.page-content').hide();
      $('#registerCarrier').fadeIn(400);
  };

  module.registerController = registerController;
})(window);
