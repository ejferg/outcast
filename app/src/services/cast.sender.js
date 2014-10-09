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

<<<<<<< HEAD
      chrome.cast.initialize(config, onSenderInitializationComplate, onError);

    };

    var onSenderInitializationComplate {

      $log.info('Initialization Complete');
=======
      chrome.cast.initialize(config, onSuccess, onError);
>>>>>>> 96fe40ab652bfc98223f1a22fbe5823923cd8418
    };

    var onSuccess = function() {

<<<<<<< HEAD
=======
      $log.info('Initialization Complete')

>>>>>>> 96fe40ab652bfc98223f1a22fbe5823923cd8418
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

<<<<<<< HEAD
    var onReceiverReady = function(e) {

      $log.info(e);
=======
    var onReceiverReady = function() {

>>>>>>> 96fe40ab652bfc98223f1a22fbe5823923cd8418
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

<<<<<<< HEAD
        }, errorListener);
=======
        }, successListener, errorListener);
>>>>>>> 96fe40ab652bfc98223f1a22fbe5823923cd8418

      }
    };

    init();

    return {
      sendMessage: sendMessage
    }
  }

])