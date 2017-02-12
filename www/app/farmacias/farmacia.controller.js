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
     var ref = logger.database().ref('Medicamentos');
     ref.on("value", function(snapshot) {
         $scope.data = snapshot.val();
         console.log($scope.data);
          $ionicLoading.hide();
     });
  console.log("asdasd");
     $scope.medicamento={};
       $scope.writeMedicamento = function(name,costoCompra,costoVenta,pais,cantidad) {
            firebase.database().ref('Medicamentos/'+name).set({
              nombre: name,
              costoCompra: costoCompra,
              costoVenta: costoVenta,
              pais: pais,
              cantidad: cantidad
            });
       }
      $scope.agregarMedicamento = function(){
      console.log($scope.medicamento.nombreMedicamento);
         $scope.writeMedicamento($scope.medicamento.nombreMedicamento,$scope.medicamento.costoCompra,
         $scope.medicamento.costoVenta,$scope.medicamento.pais,$scope.medicamento.cantidad);
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
       $scope.createContact = function(u) {
         $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
         $scope.modal.hide();
      };
  }
})();
