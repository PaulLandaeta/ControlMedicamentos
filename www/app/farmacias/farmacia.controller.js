(function () {
  'use strict';

  angular
    .module('app.pharmacy')
    .controller('PharmacyController', PharmacyController);

  PharmacyController.$inject = ['$state','$scope','$stateParams','$ionicLoading','logger','$ionicModal'];

  function PharmacyController($state,$scope,$stateParams,$ionicLoading,logger,$ionicModal) {
    var vm = this;

    $ionicLoading.show({
      template: 'Cargando...'
    });
    $scope.logger = logger;
     var ref = logger.database().ref('Farmacia');
     ref.on("value", function(snapshot) {
         $scope.data = snapshot.val();
         console.log($scope.data);
          $ionicLoading.hide();
     });
     $scope.medicamento={};
       $scope.writeFarmacia = function(name,direccion) {
            firebase.database().ref('Farmacia/'+name).set({
              Nombre: name,
              Direccion: direccion
            });
       }
      $scope.agregarFarmacia = function(){
      console.log($scope.medicamento.nombreFarmacia);
         $scope.writeFarmacia($scope.medicamento.nombreFarmacia,$scope.medicamento.direccion);
         $scope.medicamento={};
      }

      $ionicModal.fromTemplateUrl('app/farmacias/modalPharmacy.html', {
         scope: $scope
      }).then(function(modal) {
         console.log("create Modal")
         $scope.modal = modal;
      });


       vm.openModal = function() {
          console.log("Open Modal");
          $scope.modal.show();
       };
  }
})();
