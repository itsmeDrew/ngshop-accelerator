'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'header': {
          templateUrl: 'partials/_header.html',
          controller: 'HeaderCtrl',
          controllerAs: 'header'
        },
        'nav@app': {
          templateUrl: 'partials/_nav.html',
          controller: 'NavCtrl',
          controllerAs: 'nav'
        },
        'content': {
          templateUrl: 'templates/home.tpl.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        },
        'footer': {
          templateUrl: 'partials/_footer.html',
          controller: 'FooterCtrl',
          controllerAs: 'footer'
        }
      }
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
