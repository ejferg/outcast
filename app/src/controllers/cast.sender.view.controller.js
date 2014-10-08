outcast.controller('CastSenderViewController', [

  '$scope',
  '$log',
  'CastSender',
  'Instagram',

  function($scope, $log, CastSender, Instagram) {

    // Utiltiy Methods

    // Intialize
    var init = function() {

      getContent();

    };

    // Load content from Instagram
    var getContent = function() {

      Instagram.getTags().then(

        function onSuccess(tags) {
          $scope.tags = tags.data.data;
        },

        function onError(error) {

          $log.error(error);
        }
      );
    };

    // Scope Methods

    // Send Cast Messages
    $scope.sendMessage = function() {

      CastSender.sendMessage('test');
    }

    init();
  }

]);