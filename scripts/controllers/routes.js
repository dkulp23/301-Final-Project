'use strict';

page('/',
  indexView.initalLoad,
  userGeoLoc.getUserLocation,
  Carrier.getData
);

page('/info',
  infoView.reveal
);

page('/register', carrierRegisterView.reveal);

page('regConf',
  registrationController.handleInfoFormSubmit,
  carrierRegisterView.submit
);

page('/reportOD',
  mapView.showMap
);

page();
