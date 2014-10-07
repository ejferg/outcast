'use strict';

outcast.factory('Instagram', [

  '$rootScope',
  '$http',
  '$q',
  '$window',
  'oAuth',
  'AppConfig',
  'AppViews',

  function($rootScope, $http, $q, $window, oAuth, AppConfig, AppViews) {

    // Properties
    var clientId = AppConfig.INSTAGRAM.clientId;

    // Urls Properties
    var baseUrl = AppConfig.INSTAGRAM.baseUrl;

    return {

    }
  }

]);