(function() {
    function CreateCtrl($uibModalInstance, Room) {
                
        this.submit = function (roomName) {
            alert("New Chat Room");
            //Room.newRoom(roomName);
            $uibModalInstance.close('new room created');
        };
        
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('CreateCtrl', ['Room', '$uibModalInstance', CreateCtrl]);
})();