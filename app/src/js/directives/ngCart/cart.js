'use strict';

var app = angular.module('App.Directive.ngCart.Cart', []);

app.directive('ngcartCart', ngcartCart);

function ngcartCart(ngCart) {
  return {
      restrict : 'E',
      controller : 'CartCtrl',
      scope: {},
      templateUrl: function(element, attrs) {
          if ( typeof attrs.templateUrl == 'undefined' ) {
              return 'partials/cart/_cart.html';
          } else {
              return attrs.templateUrl;
          }
      },
      link:function(scope, element, attrs){

      }
  };
}

module.exports = ngcartCart;
