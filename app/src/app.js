'use strict';

var root = window;

// Application Configuration

var outcast = root.outcast = angular.module('outcast', [

  // App Dependecies

  'ngRoute',
  // 'ngTouch'

]).config([

  '$routeProvider',
  '$locationProvider',

  function ($routeProvider, $locationProvider) {

    // Route Configuration

    $routeProvider

    // .when('/', [
    //   {
    //     templateUrl: '/views/app.view.html',
    //     controller: 'AppController'
    //   }
    // ]);

    // Location Configurations

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
  }

])

// Application Constatns

.constant('AppInfo', {

    NAME: 'outcast',
    VERSTION: '1.0'

})

  // App Configurations
.constant('AppConfig', {

    INSTAGRAM: {
      baseUrl: 'https://api.instagram.com/v1/',
      authBaseUrl: 'https://instagram.com/oauth/authorize',
      redirectUri: 'http://127.0.0.1:51792/outcast/app/src/views/oauth.view.html',
      clientId: '9666685503db4d70bce5b70a96c939c0'
    }

})

// App Views

.constant('AppViews', {

  AUTH_VIEW: {url: '/outcast/app/src/views/oauth.view.html'}

})

// App Storage Keys

.constant('AppStorageKeys', {

  ACCESS_TOKEN: 'accessToken',
  MEDIA: ''

})


// App Events

.constant('AppEvents', {

  AUTH_TOKEN_CHANGED: 'authTokenChanged'

});