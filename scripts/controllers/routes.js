'use strict';

page('/',
  indexView.initalLoad,
  userGeoLoc.getUserLocation
);

page('/info',
  infoController.reveal
);

page('/register', carrierRegisterView.reveal);

page('/reportOD',
  mapView.showMap
);

page();
