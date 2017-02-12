(function () {
  'use strict';

  angular
    .module('app.tabDash')
    .config(configuration);

  configuration.$inject = ['$stateProvider'];

  function configuration($stateProvider) {

    var states = [
      {
        name: 'tab.dash',
        url: '/medicine',
        templateUrl: 'app/medicamentos/medicamentos.html',
        controller: 'TabController',
        controllerAs: 'tab'
      }
    ];

    states.forEach($stateProvider.state);

  }

})();
