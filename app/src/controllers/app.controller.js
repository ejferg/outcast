'use strict';

outcast.controller('AppController', [

  '$scope',
  '$log',
  'Instagram',

  function($scope, $log, Instagram) {

    // Intialize
    var init = function() {

      authenicate();
    };

    // Utility
    var authenicate = function() {

      Instagram.authenicate().then(

          function onSuccess() {
            $log.info('success');
          },

          function onFail() {
            $log.info('fail');
          }
      );

    };

    init();
  }

]);