(function() {
    function HomeCtrl(Room, $uibModal) {
        this.roomList = Room.all;
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
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();