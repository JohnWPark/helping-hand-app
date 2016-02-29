'use strict';

var app = angular
  .module('HelpingHandApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster',
    'angularMoment'
  ])
  .constant('FURL', 'https://helpinghand-app.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/browse/:taskId', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl'
      })
      .when('/dashboard,' {
        templateUrl: 'views/dashboard.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
