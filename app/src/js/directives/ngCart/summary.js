'use strict';

var app = angular.module('App.Directive.ngCart.Summary', []);

app.directive('ngcartSummary', ngcartSummary);

function ngcartSummary(ngCart) {
  return {
      restrict : 'E',
      controller : 'CartCtrl',
      scope: {},
      transclude: true,
      templateUrl: function(element, attrs) {
          if ( typeof attrs.templateUrl == 'undefined' ) {
              return 'partials/cart/_summary.html';
          } else {
              return attrs.templateUrl;
          }
      }
  };
}

module.exports = ngcartSummary;
