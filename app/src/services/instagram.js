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

      var url = _.str.sprintf('%s/users/self?access_token=%s', baseUrl, accessToken);

      return $http.get(url);
    }

    var getTags = function() {

      var url = _.str.sprintf('%s/tags/outkastatlast/media/recent?client_id=%s', baseUrl, clientId);

      return $http.get(url);
    }

    return {
      getUser: getUser,
      getTags: getTags
    }
  }

]);