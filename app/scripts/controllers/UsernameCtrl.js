(function() {
    function UsernameCtrl($cookies, $uibModalInstance) {
        this.submit = function (userName) {
            $cookies.put('blocChatCurrentUser', userName);
            $uibModalInstance.close();
            console.log($cookies.get('blocChatCurrentUser'));
        };
    }
  
    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$cookies', '$uibModalInstance', UsernameCtrl]);
})();