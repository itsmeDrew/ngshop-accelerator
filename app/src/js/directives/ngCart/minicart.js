'use strict';

var app = angular.module('App.Directive.ngCart.Minicart', []);

app.directive('ngcartMinicart', ngcartMinicart);

function ngcartMinicart(ngCart) {
  return {
      restrict : 'E',
      controller : 'CartCtrl',
      scope: {},
      templateUrl: function(element, attrs) {
          if ( typeof attrs.templateUrl == 'undefined' ) {
              return 'partials/cart/_minicart.html';
          } else {
              return attrs.templateUrl;
          }
      },
      link:function(scope, element, attrs){

      }
  };
}

module.exports = ngcartMinicart;
