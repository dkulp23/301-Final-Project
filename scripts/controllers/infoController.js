'use strict';

(function(module) {
  var infoController = {};

  infoController.reveal = function(ctx, next) {
    $('.page-content').hide();
    $('#informational').fadeIn(400);
    next();
  };

  module.infoController = infoController;
})(window);
