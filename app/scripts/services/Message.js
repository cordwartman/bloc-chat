(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        
        var getRoomId = function(roomId) {
            //ref.child(roomId)
            var orderQuery = ref.orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(orderQuery);
        }
        
        return {
            getByRoomId: getRoomId
        };  
    }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();