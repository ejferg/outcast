outcast.factory('CastSender', [

  '$rootScope',
  '$log',
  '$timeout',
  'AppCast',

  function($rootScope, $log, $timeout, AppCast) {

    var session = null;

    // Initialization
    var init = function() {

      if (!chrome.cast || !chrome.cast.isAvailable) {

        $timeout(angular.bind(this, onInitilizeTimeoutComplete), 1000);
      }

    };


    // Event handlers
    var onInitilizeTimeoutComplete = function() {

      var sessionRequest = new chrome.cast.SessionRequest(AppCast.APPLICATION_ID);

      var sessionListener = angular.bind(this, onSessionReady);
      var receiverListener = angular.bind(this, onReceiverReady);

      var config = new chrome.cast.ApiConfig(sessionRequest,sessionListener,receiverListener);

      chrome.cast.initialize(config, onSuccess, onError);
    };

    var onSuccess = function() {

      $log.info('Initialization Complete')

    };

    var onError = function(error) {

      $log.eror(error);

    };

    var onSessionReady = function(e) {

      session = e;

      if(session) {

        var media = this.session.media[0];

        session.addUpdateListener(angular.bind(this, onSessionChange));
      }

    };

    var onSessionChange = function(e) {

    };

    var onReceiverReady = function() {

    };

    var sendMessage = function(message) {

      var successListener = angular.bind(this, onSuccess);
      var errorListener = angular.bind(this, onError);

      if(session) {

        session.sendMessage(AppCast.NAMESPACE, message, successListener, errorListener);

      } else {

        chrome.cast.requestSession(function(e) {

          session = e;
          sendMessage(message);

        }, successListener, errorListener);

      }
    };

    init();

    return {
      sendMessage: sendMessage
    }
  }

])