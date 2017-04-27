(function() {
  // Initialize Firebase
  var config = {
     apiKey: "AIzaSyBy4L5orazlC7U6eK6qLDPT7ML-NcUPdEQ",
    authDomain: "angular-4325b.firebaseapp.com",
    databaseURL: "https://angular-4325b.firebaseio.com",
    projectId: "angular-4325b",
    storageBucket: "angular-4325b.appspot.com",
    messagingSenderId: "1085334081501"
  };
  firebase.initializeApp(config);

angular
    .module('app', ['firebase'])
    .controller('MyCtrl', function($firebaseObject){

/*        var firebaseRef = firebase.database().ref();
        firebaseRef.child('Testing').set("TTT");

      const preObject = document.getElementById('object');
      const dbRefObject = firebase.database().ref().child('obj');
      dbRefObject.on('value',snap =>{ 
           preObject.innerText = JSON.stringify(snap.val(),null,3);
          });*/
    });
}());