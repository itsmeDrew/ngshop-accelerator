'use strict';

var app = angular.module('App.Directive.ngCart.Checkout', []);

app.directive('ngcartCheckout', ngcartCheckout);

function ngcartCheckout(ngCart) {
    return {
          restrict : 'E',
          controller : ('CartCtrl', [ function($rootScope, $scope, ngCart, fulfilmentProvider) {
            $scope.ngCart = ngCart;

            $scope.checkout = function () {
              fulfilmentProvider.setService($scope.service);
              fulfilmentProvider.setSettings($scope.settings);
              fulfilmentProvider.checkout()
              .success(function (data, status, headers, config) {
                $rootScope.$broadcast('ngCart:checkout_succeeded', data);
              })
              .error(function (data, status, headers, config) {
                $rootScope.$broadcast('ngCart:checkout_failed', {
                  statusCode: status,
                  error: data
                });
              });
            }
          }]),
          scope: {
            service:'@',
            settings:'='
          },
          transclude: true,
          templateUrl: function(element, attrs) {
            if ( typeof attrs.templateUrl == 'undefined' ) {
              return 'partials/cart/_checkout.html';
            } else {
              return attrs.templateUrl;
            }
          }
    };

}

module.exports = ngcartCheckout;
