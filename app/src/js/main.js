'use strict';

require('angular');
require('./templates');
require('jquery');
require('angularfire');
require('firebase');
require('angular-ui-router');

// CONTROLLERS
require('./controllers/HeaderCtrl');
require('./controllers/NavCtrl');
require('./controllers/FooterCtrl');
require('./controllers/HomeCtrl');
require('./controllers/CartCtrl');

//DIRECTIVES
require('./directives/ngCart/addToCart');
require('./directives/ngCart/cart');
require('./directives/ngCart/minicart');
require('./directives/ngCart/checkout');
require('./directives/ngCart/summary');

//SERVICES
require('./services/ngCart/cartService');
require('./services/ngCart/itemsService');
require('./services/ngCart/storeService');
require('./services/ngCart/fulfilment/fulfilmentHttp');
require('./services/ngCart/fulfilment/fulfilmentLog');
require('./services/ngCart/fulfilment/fulfilmentProvider');
require('./services/products/productService');

var app = angular.module('App', [
  'ui.router',
  'firebase',
  'templates',
  'App.Controller.Header',
  'App.Controller.Nav',
  'App.Controller.Footer',
  'App.Controller.Home',
  'App.Controller.CartCtrl',
  'App.Directive.ngCart.AddToCart',
  'App.Directive.ngCart.Cart',
  'App.Directive.ngCart.Minicart',
  'App.Directive.ngCart.Checkout',
  'App.Directive.ngCart.Summary',
  'App.Service.ngCart.Cart',
  'App.Service.ngCart.Items',
  'App.Service.ngCart.Store',
  'App.Service.ngCart.Fulfilment.Http',
  'App.Service.ngCart.Fulfilment.Log',
  'App.Service.ngCart.Fulfilment.Provider',
  'App.Service.Products.Products',
]);

app.controller('AppCtrl', require('./controllers/AppCtrl'));

app.constant('config', window.config);

app.config(require('./on_config'));
