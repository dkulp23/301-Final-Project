'use strict';

(function(module) {
  var infoController = {};

  infoController.reveal = function() {
    $('.page-content').hide();
    $('#informational').fadeIn(400);
  };

  module.infoController = infoController;
})(window);
