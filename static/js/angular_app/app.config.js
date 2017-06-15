'use strict';

angular.
  module('userApp').
  config(['$locationProvider' ,'$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {
      $locationProvider.hashPrefix('');
      $httpProvider.defaults.xsrfCookieName = 'csrftoken';
      $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

      $routeProvider.
        when('/login', {
          template: '<user-login></user-login>'
        }).
        when('/user/:Id', {
          template: '<user-data></user-data>'
        }).
        otherwise('/login');
    }
  ]);
