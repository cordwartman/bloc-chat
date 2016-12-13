(function() {
    function Message($cookies, $firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        var currentRoomId;

        var getRoomId = function(roomId) {
            //ref.child(roomId)
            var orderQuery = ref.orderByChild("roomId").equalTo(roomId);
            currentRoomId = roomId;
            return $firebaseArray(orderQuery);
        }
        
        var send = function(newMessage) {
            messages.$add({username: $cookies.get('blocChatCurrentUser'), content: newMessage, roomId: currentRoomId, sentAt: new Date().toTimeString() });
            console.log(newMessage);
        };
        
        return {
            getByRoomId: getRoomId,
            send: send
        };  
    }

  angular
    .module('blocChat')
    .factory('Message', ['$cookies', '$firebaseArray', Message]);
})();