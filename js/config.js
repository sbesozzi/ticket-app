let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.list', {
      url: '/',
      controller: 'ListController',
      templateUrl: 'templates/list.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    .state('root.single', {
      url: '/single/:id',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
