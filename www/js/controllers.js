angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Medicamentos) {
    $scope.medicamentos = Medicamentos;
   var ref = Medicamentos.database().ref('Medicamentos');
   ref.on("value", function(snapshot) {
     // This isn't going to show up in the DOM immediately, because
     // Angular does not know we have changed this in memory.
     // $scope.data = snapshot.val();
     // To fix this, we can use $scope.$apply() to notify Angular that a change occurred.
     $scope.$apply(function() {
       $scope.data = snapshot.val();
        console.log($scope.data);
     });
   });


//    $scope.writeMedicamento("Amoxicilina",25);
   /* $scope.medicamentos.$loaded().then(function(todo) {
        console.log(todo.Users);
    });
    */

})

.controller('ChatsCtrl', function($scope, Chats,Medicamentos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
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
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
