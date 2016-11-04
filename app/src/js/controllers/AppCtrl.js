'use strict';

var app = angular.module('App.Controller.App', []);

app.controller('AppCtrl', AppCtrl);

function AppCtrl ($scope, $firebaseObject, $state, config) {
  var vm = this;

};

module.exports = AppCtrl;
