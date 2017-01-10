'use strict';

page.base('/');
page('/', homeController.reveal);
page('/info', infoController.reveal);
page('/register', registerController.reveal);
page();
