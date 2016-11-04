'use strict';

var app = angular.module('App.Controller.CartCtrl', []);

app.controller('CartCtrl', CartCtrl);

app.run(function ($rootScope, ngCart, ngCartItem, store) {

    $rootScope.$on('ngCart:change', function(){
        ngCart.$save();
    });

    if (angular.isObject(store.get('cart'))) {
        ngCart.$restore(store.get('cart'));

    } else {
        ngCart.init();
    }

});

function CartCtrl ($scope, ngCart, $http) {
  var vm = this;

  $scope.ngCart = ngCart;

  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);
};

module.exports = CartCtrl;
