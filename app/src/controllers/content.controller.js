outcast.controller('ContentController', [

  '$scope',
  '$log',
  'Instagram',

  function($scope, $log, Instagram) {

    var init = function() {

      getContent();

    };

    var getContent = function() {

      Instagram.getTags().then(

        function onSuccess(tags) {
          $scope.content = tags;
        },

        function onError(error) {

          $log.error(error);
        }
      );
    };

    init();
  }

]);