'use strict';

outcast.factory('Instagram', [

  '$rootScope',
  '$http',
  '$q',
  '$window',
  'oAuth',
  'Session',
  'AppConfig',
  'AppViews',

  function($rootScope, $http, $q,
           $window, oAuth, Session,
           AppConfig, AppViews) {

    // Properties
    var clientId = AppConfig.INSTAGRAM.clientId;

    // Urls Properties
    var baseUrl = AppConfig.INSTAGRAM.baseUrl;

    // Utility Methods
    var getUser = function() {

      var deferred = $q.defer();

      var accessToken = Session.getAccessToken();

      var url = _.str.sprintf('%s/users/self??callback=JSON_CALLBACK&access_token=%s', baseUrl, accessToken);

      return $http.jsonp(url);
    }

    var getTags = function() {

      var url = _.str.sprintf('%s/tags/outkastatlast/media/recent/?callback=JSON_CALLBACK&client_id=%s', baseUrl, clientId);

      return $http.jsonp(url);
    }

    return {
      getUser: getUser,
      getTags: getTags
    }
  }

]);