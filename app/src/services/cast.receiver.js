outcast.factory('CastReceiver', [

  '$rootScope',
  '$window',
  'AppCast',

  function($rootScope, $window, AppCast) {

    var manager = null;
    var messageBus = null;

    // Initialize

    var init = function() {

      cast.receiver.logger.setLevelValue(0);

      manager = cast.receiver.CastReceiverManager.getInstance();
      messageBus = manager.getCastMessageBus(AppCast.NAMESPACE);

      addEventListeners();
      start();
    };

    // Start

    var start = function() {
      manager.start({statusText: "Application is starting"});
    }

    // Event handlers

    var onReady = function(e) {

      $log.info(e);
    };

    var onSenderConnected = function(e) {
      $log.info(e);
    };

    var onMessage = function(e) {
      $log.info(e);

      messageBus.send(e.senderId, e.data);
    };

    var addEventListeners = function() {

      manager.onReady = angular.bind(this, onReady);
      manager.onSenderConnected = angular.bind(this, onSenderConnected);

      messageBus.onMessage = angular.bind(this, onMessage);

    };

    init();

  }

]);