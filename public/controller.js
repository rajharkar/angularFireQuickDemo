angular
    .module('app', ['firebase'])
    .controller('TodoCtrl', function($firebaseObject){

        var firebaseRef = firebase.database().ref();
        firebaseRef.child('Testing').set("TTT");

      const preObject = document.getElementById('object');
      const dbRefObject = firebase.database().ref().child('obj');
      dbRefObject.on('value',snap =>{ 
           preObject.innerText = JSON.stringify(snap.val(),null,3);
          });
      });
