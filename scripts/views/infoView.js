'use strict';

(function(module) {
  var infoView = {};

  infoView.reveal = function() {
    $('.page-content').hide();
    $('#informational').fadeIn(400);
  };

  module.infoView = infoView;
})(window);
