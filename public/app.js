(function() {
  // Initialize Firebase
  var config = {
    apiKey: "YourApiKey",
    authDomain: "your-database.firebaseapp.com",
    databaseURL: "https://your-database.firebaseio.com",
    storageBucket: "your-database.appspot.com",
  };
  firebase.initializeApp(config);

angular
    .module('app', ['firebase'])
    .controller('MyCtrl', function($firebaseObject){
        const rootRef = firebase.database().ref().child('angular');
        const ref = rootRef.child('object');
        this.object = $firebaseObject(ref);
    });
}());