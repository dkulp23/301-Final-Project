'use strict';

page('/', homeController.reveal);
page('/info', infoController.reveal);
page('/register', registerController.reveal);
page('/reportOD', Carrier.sendEmails);
page();
