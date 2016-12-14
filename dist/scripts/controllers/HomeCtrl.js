(function() {
    function HomeCtrl(Message, Room, $uibModal) {
        HomeCtrl.activeRoom = null;
        this.activeRoomName = "Choose a Room";
        this.activeRoomMessages = [];
        this.roomList = Room.all;
        
        this.changeRoom = function(roomId, indexNum){
            this.activeRoom = this.roomList[indexNum];
            this.activeRoomName = this.activeRoom.$value;
            this.activeRoomId = roomId;
            this.activeRoomMessages = Message.getByRoomId(roomId);
            console.log(this.activeRoomMessages[0]);
        };
        
        this.showRoomModal = function() {
            var newRoomInstance = $uibModal.open({
                templateUrl: "/templates/createRoomTemp.html",
                controller: "CreateCtrl as createRoom",
                bindToController: true, 
                size: 'lg'
            });
            newRoomInstance.result.then(function(){
                alert("New chat room created!");
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', '$uibModal', HomeCtrl]);
})();