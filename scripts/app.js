'use strict';

var app = angular
  .module('HelpingHandApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .constant('FURL', 'https://helpinghand-app.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'TaskCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
