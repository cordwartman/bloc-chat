(function() {
    function Room ($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        return {
            all: rooms,
            newRoom: function (roomName) {
            console.log(roomName);
            rooms.$add(roomName);
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();