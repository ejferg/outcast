outcast.factory('Session', [

  '$rootScope',
  '$window',
  'AppEvents',
  'AppStorageKeys',

  function($rootScope, $window, AppEvents, AppStorageKeys) {

    // Properties
    var storage = $window.localStorage || {};

    // Utlity Methods
    var setAccessToken = function(token, expires) {

      storage[AppStorageKeys.ACCESS_TOKEN] = token;

      $rootScope.$broadcast(AppEvents.AUTH_TOKEN_CHANGED, token);

    };

    var getAccessToken = function() {

      return storage[AppStorageKeys.ACCESS_TOKEN];

    };

    var setCurrentUser = function(user) {

      storage[AppStorageKeys.CURRENT_USER] = user;
    }

    var getCurrentUser = function() {

      return storage[AppStorageKeys.CURRENT_USER];
    }

    return {
      setAccessToken: setAccessToken,
      getAccessToken: getAccessToken
    }

  }

]);