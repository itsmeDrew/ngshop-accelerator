'use strict';

var app = angular.module('App.Service.Products.Products', []);

app.service('products', products);

function products ($firebaseArray, $firebaseObject, config) {
  this.init = function() {
    this.$products = [];
  };

  this.getAllProducts = function () {
    var _ref = new Firebase(config.baseDataURL + 'products');

    return $firebaseObject(_ref);
  }

  this.getProductBySlug = function getSetBySlug(slug, callback) {
    var _ref = new Firebase(config.baseDataURL + 'products');

    _ref.orderByChild("slug").equalTo(slug).on("value", function(snapshot) {
      for (var key in snapshot.val()) {
        if (snapshot.val().hasOwnProperty(key)) {
          callback(snapshot.val()[key]);
        }
      }
    });
  }

};

module.exports = products;
