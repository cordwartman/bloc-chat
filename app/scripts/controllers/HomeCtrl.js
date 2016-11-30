(function() {
    function HomeCtrl(Room) {
        this.roomList = [];
        this.roomList = Room;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();