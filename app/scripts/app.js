(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
})();

(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    
    var setUser = function(username) {
        $cookies.put('blocChatCurrentUser', username);
        currentUser = username;
    };
      
    if (!currentUser || currentUser === '') {
      var newUserInstance = $uibModal.open({
                templateUrl: "/templates/UsernameModal.html",
                controller: "UsernameCtrl as createUser",
                bindToController: true, 
                size: 'sm',
                backdrop: 'static',
                keyboard: false
            });
            newUserInstance.result.then(function(){
                currentUser = $cookies.get('blocChatCurrentUser');
                alert("New Username created! " + currentUser);
            });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();