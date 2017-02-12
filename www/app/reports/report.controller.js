(function () {
  'use strict';

  angular
    .module('app.report')
    .controller('ReportController', ReportController);

  ReportController.$inject = ['$state','$scope','$stateParams','$ionicLoading','logger','$ionicModal'];

  function ReportController($state,$scope,$stateParams,$ionicLoading,logger,$ionicModal) {
    var vm = this;
  }
})();
