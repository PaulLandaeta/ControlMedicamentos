  (function() {
  angular
      .module('app.core')
      .factory('logger', logger);

  function logger($log) {
    var config = {
        apiKey: "AIzaSyARogZkVwQBhUoCdjRwEVR-huhTGsRvejs",
        authDomain: "controlmedicamentos-9ac49.firebaseapp.com",
        databaseURL: "https://controlmedicamentos-9ac49.firebaseio.com",
        storageBucket: "controlmedicamentos-9ac49.appspot.com",
        messagingSenderId: "679062327365"
      };
     // firebase.initializeApp(config);
    return  firebase.initializeApp(config); //$firebaseArray(firebase.database().ref());
  }
})();
