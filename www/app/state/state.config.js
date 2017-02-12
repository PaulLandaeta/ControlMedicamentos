(function () {
  'use strict';

  angular
    .module('app.state')
    .config(configuration);

  configuration.$inject = ['$ionicConfigProvider','$urlRouterProvider'];

  function configuration($ionicConfigProvider,$urlRouterProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $urlRouterProvider.otherwise('/tab/medicine');

  }

})();
