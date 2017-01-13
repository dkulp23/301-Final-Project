'use strict';

(function(module) {
  var userGeoLoc = { };

  userGeoLoc.getUserLocation = function(ctx, next) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('position', position);
        var latLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        localStorage.setItem('userLocation', JSON.stringify(latLng));
      });
      next();
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
      next();
    }
  };

  userGeoLoc.handleLocationError = function(browserHasGeolocation, infoWindow, center) {
    infoWindow.setPosition(center);
    infoWindow.setContent(browserHasGeolocation ?
        '<h3 style="text-align:center">Error: The Geolocation service failed.<br>Please type in address or landmark.</h3>' :
        '<h3 style="text-align:center>Error: Your browser doesn\'t support geolocation.<br>Please type in address or landmark.</h3>');
    infoWindow.open(map, marker);
  };

  module.userGeoLoc = userGeoLoc;
})(window);
