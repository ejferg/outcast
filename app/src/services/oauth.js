outcast.factory('oAuth', [

  '$rootScope',
  '$window',
  'Session',
  'AppViews',
  'AppConfig',
  'AppEvents',

  function($rootScope, $window, Session, AppViews, AppConfig, AppEvents) {

    // Const
    var AUTH_EVENT_READY = 'ready';
    var AUTH_EVENT_DONE = 'done';
    var AUTH_EVENT_MESSAGE = 'message';

    var MESSAGE_UPDATE_URL = 'updateUrl';

    var AUTH_SECURE_URI = 'http://127.0.0.1:51792';

    // Properties
    var oauthView;
    var authViewUrl = AppViews.AUTH_VIEW.url;
    var baseUrl     = AppConfig.INSTAGRAM.baseUrl;
    var authBaseUrl = AppConfig.INSTAGRAM.authBaseUrl;
    var redirectUrl = AppConfig.INSTAGRAM.redirectUri;
    var clientId = AppConfig.INSTAGRAM.clientId;

    var oauthUrl    = _.str.sprintf(
        '%s?client_id=%s&redirect_uri=%s&response_type=token',
        authBaseUrl, clientId, redirectUrl
      );


    // Utility Methods

    var authenicate = function() {

      addEventListeners();
      oauthView = $window.open(authViewUrl);

    };


    // Event Listeners/Handlers

    var onMessage = function(e) {

      var event = angular.fromJson(e.data);

      if(event.name == AUTH_EVENT_READY) {
        onReady(event)
      }

      if(event.name == AUTH_EVENT_DONE) {

        $rootScope.$apply(function() {
          onDone(event);
        });
      }

    };

    var onReady = function(e) {
      var event = '{"name": "'+ MESSAGE_UPDATE_URL + '", "data": "' + oauthUrl + '"}';
      oauthView.postMessage(event, AUTH_SECURE_URI);
    };

    var onDone = function(e) {

      Session.setAccessToken(e.data, null);
    };

    var addEventListeners = function() {

      var handler = angular.bind(this, onMessage);
      $window.addEventListener(AUTH_EVENT_MESSAGE, handler, false);
    };


    return {
      authenicate: authenicate
    }
  }

]);