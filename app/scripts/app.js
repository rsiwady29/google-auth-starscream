'use strict';

/**
 * @ngdoc overview
 * @name googleOauthApp
 * @description
 * # googleOauthApp
 *
 * Main module of the application.
 */
angular
  .module('googleOauthApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'googleOauth'
  ])
  .config(function ($routeProvider,TokenProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // Demo configuration for the "angular-oauth demo" project on Google.
      // Log in at will!

      // Sorry about this way of getting a relative URL, powers that be.
    var baseUrl = document.URL.replace('example/demo.html', '');

    TokenProvider.extendConfig({
        clientId: '245560636580-8c497thpvivpkm3l60sjgtvqeejfl55t.apps.googleusercontent.com',
        redirectUri: baseUrl + 'views/oauth2callback.html',  // allow lunching demo from a mirror
        scopes: ["https://www.googleapis.com/auth/userinfo.email"]
    });
  });
