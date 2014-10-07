'use strict';

outcast.controller('AppController', [

  '$scope',
  '$log',
  'Session',
  'oAuth',
  'AppEvents',

  function($scope, $log, Session, oAuth, AppEvents) {

    // Authenication

    var accessToken = Session.getAccessToken();

    var init = function() {

      if(accessToken) {

      $log.info('Has access token');

      } else {

        // oAuth.authenicate();
        var onAuthTokenChangeRef = $scope.$on(

          AppEvents.AUTH_TOKEN_CHANGED,

          function onAuthTokenChange(event, token) {

            if(token) {

              $log.info('Has access token');
            }

            onAuthTokenChangeRef();

          });
      }
    }

    init();

  }

]);