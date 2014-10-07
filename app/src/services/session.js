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

    return {
      setAccessToken: setAccessToken,
      getAccessToken: getAccessToken
    }

  }

]);