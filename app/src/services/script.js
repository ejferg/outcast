outcast.factory('Script', [

  'angularLoad',

  function(angularLoad) {

    return {
      load: angularLoad.loadScript
    }

  }
]);