'use strict';

var app = angular.module('App.Service.ngCart.Fulfilment.Http', []);

app.service('fulfilmentHttp', fulfilmentHttp);

function fulfilmentHttp ($http, ngCart) {
  this.checkout = function(settings){
    return $http.post(settings.url,
      { data: ngCart.toObject(), options: settings.options});
    }
};

module.exports = fulfilmentHttp;
