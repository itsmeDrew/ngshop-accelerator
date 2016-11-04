'use strict';

var app = angular.module('App.Directive.ngCart.AddToCart', []);

app.directive('ngcartAddtocart', ngcartAddtocart);

function ngcartAddtocart(ngCart) {
  return {
      restrict : 'E',
      controller : 'CartCtrl',
      scope: {
          id:'@',
          name:'@',
          quantity:'@',
          quantityMax:'@',
          price:'@',
          data:'='
      },
      transclude: true,
      templateUrl: function(element, attrs) {
          if ( typeof attrs.templateUrl == 'undefined' ) {
              return 'partials/cart/_addtocart.html';
          } else {
              return attrs.templateUrl;
          }
      },
      link:function(scope, element, attrs){
          scope.attrs = attrs;
          scope.inCart = function(){
              return  ngCart.getItemById(attrs.id);
          };

          if (scope.inCart()){
              scope.q = ngCart.getItemById(attrs.id).getQuantity();
          } else {
              scope.q = parseInt(scope.quantity);
          }

          scope.qtyOpt =  [];
          for (var i = 1; i <= scope.quantityMax; i++) {
              scope.qtyOpt.push(i);
          }
      }

  };
}

module.exports = ngcartAddtocart;
