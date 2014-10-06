'use strict';

outcast.factory('Instagram', [

  '$rootScope',
  '$http',
  '$q',
  '$window',
  'AppConfig',
  'AppViews',

  function($rootScope, $http, $q, $window, AppConfig, AppViews) {

    // Properties
    var clientId = AppConfig.INSTAGRAM.clientId;

    // Urls Properties
    var baseUrl = AppConfig.INSTAGRAM.baseUrl;
    var authBaseUrl = AppConfig.INSTAGRAM.authBaseUrl;
    var redirectUrl = AppConfig.INSTAGRAM.redirectUri;
    var authViewUrl = AppViews.AUTH_VIEW.url;

    // Method
    var authenicate = function() {

      var deferred = $q.defer();

      var oauthUrl = _.str.sprintf('%s?client_id=%s&redirect_uri=%s&response_type=token',
                          authBaseUrl, clientId, redirectUrl);

      var oauthView = $window.open(authViewUrl);

      window.addEventListener('message', function(e) {
        oauthView.postMessage(oauthUrl, 'http://127.0.0.1:51792');
        console.log(event);

      }, false);

      return deferred.promise;
    }


    return {
      authenicate: authenicate
    }
  }

]);