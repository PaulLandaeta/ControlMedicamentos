(function () {
  'use strict';

  angular
    .module('app.tab')
    .config(configuration);

  configuration.$inject = ['$stateProvider'];

  function configuration($stateProvider) {

    var states = [
      {
        name: 'tab',
        url: '/tab',
        templateUrl: 'app/tab/tabs.html',
        abstract: true
      },{
        name: 'tab.dash',
        url: '/medicine',
        views: {
          'tab-dash': {
            templateUrl: 'app/medicamentos/medicamentos.html',
            controller: 'MedicineController',
            controllerAs: 'medicine'
          }
        }
      },
      {
          name: 'tab.chats',
          url: '/pharmacy',
          views: {
            'tab-chats': {
              templateUrl: 'app/farmacias/farmacia.html',
              controller: 'PharmacyController',
              controllerAs: 'pharmacy'
            }
           }
      },
       {
          name: 'tab.account',
          url: '/report',
          views: {
                    'tab-account': {
                      templateUrl: 'app/reports/report.html',
                      controller: 'ReportController',
                      controllerAs: 'report'
                    }
                   }
       }


    ];

    states.forEach($stateProvider.state);

  }

})();
