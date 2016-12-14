(function() {
    function CreateCtrl(Room, $uibModalInstance) {
        this.submit = function (roomName) {
            Room.newRoom(roomName);
            $uibModalInstance.close();
        };
    }
  
    angular
        .module('blocChat')
        .controller('CreateCtrl', ['Room', '$uibModalInstance', CreateCtrl]);
})();