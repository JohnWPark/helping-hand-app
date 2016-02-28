'use strict';

var app = angular
  .module('HelpingHandApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://helpinghand-app.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/browse.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TaskCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
