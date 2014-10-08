'use strict';

var root = window;

// Application Bootstrap

var outcast = root.outcast = angular.module('outcast', [

  // Application Dependecies

  'ngRoute',
  // 'ngTouch'
  'angularLoad'

])


// Application Configurations

.config([

  '$routeProvider',
  '$locationProvider',

  function ($routeProvider, $locationProvider) {

    // Route Configuration

    $routeProvider

    // Sender View Route Configuration
    .when('/sender', {
        templateUrl: '/outcast/app/src/views/cast.sender.view.html',
        controller: 'CastSenderViewController',
        resolve: {
          script: function(Script) {
            return Script.load('https://www.gstatic.com/cv/js/sender/v1/cast_sender.js');
          }
        }
      }
    )

    // Reciever View Route Configuration
    .when('/receiver', {
        templateUrl: '/outcast/app/src/views/cast.receiver.view.html',
        controller: 'CastReceiverViewController',
        resolve: {
          script: function(Script) {
            return Script.load('https://www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js');
          }
        }
      }
    )

    .otherwise({ redirectTo: '/sender' });

    // Location Configurations

    // $locationProvider.html5Mode(true);
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

})

.constant('AppCast', {

  APPLICATION_ID: 'EF51F052',
  NAMESPACE: 'urn:x-cast:com.ejferg.outcast'

});