import angular from 'angular';
import 'angular-ui-router';
import config from './config';

import ListController from './controllers/list.controller.js';
import SingleController from './controllers/single.controller.js';
import AddController from './controllers/add.controller.js';

import TicketService from './services/ticket.service.js';

angular
  .module('app', ['ui.router'])
  .constant('SERVER', {
    URL: 'https://helptickets01.azurewebsites.net/api',
    CONFIG: {
      headers: {}
    }
  })
  .config(config)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('AddController', AddController)
  .service('TicketService', TicketService)
;
