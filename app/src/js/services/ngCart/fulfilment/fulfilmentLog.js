'use strict';

var app = angular.module('App.Service.ngCart.Fulfilment.Log', []);

app.service('fulfilmentLog', fulfilmentLog);

function fulfilmentLog ($q, $log, ngCart) {
  this.checkout = function(){

    var deferred = $q.defer();

    $log.info(ngCart.toObject());

    deferred.resolve({
      cart:ngCart.toObject()
    });

    return deferred.promise;

  }
};

module.exports = fulfilmentLog;
