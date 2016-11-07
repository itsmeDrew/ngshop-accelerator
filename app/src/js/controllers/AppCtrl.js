'use strict';

var app = angular.module('App.Controller.App', []);

app.controller('AppCtrl', AppCtrl);

function AppCtrl ($scope, $firebaseObject, $state, config, products) {
  var vm = this;

  $scope.products = products.getAllProducts();

  console.log($scope.products);
};

module.exports = AppCtrl;
