'use strict';

var app = angular.module('App.Service.ngCart.Fulfilment.Provider', []);

app.service('fulfilmentProvider', fulfilmentProvider);

function fulfilmentProvider ($injector) {
  this._obj = {
      service : undefined,
      settings : undefined
  };

  this.setService = function(service){
      this._obj.service = service;
  };

  this.setSettings = function(settings){
      this._obj.settings = settings;
  };

  this.checkout = function(){
      var provider = $injector.get('ngCart.fulfilment.' + this._obj.service);
        return provider.checkout(this._obj.settings);

  }
};

module.exports = fulfilmentProvider;
