(function() {
    function Room ($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        this.newRoom = function (roomName) {
            rooms.$add(roomName);
        }
        
        return {
            all: rooms
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();