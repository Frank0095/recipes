(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'authFactory'];

    /* @ngInject */
    function LoginController($state, authFactory) {
        var vm = this;

        vm.login = login;        

        ////////////////

        function login() {
        	authFactory
                .login(vm.email, vm.password)
                .then(function(response) {
        			$state.go('app.purchase');
        		})
                .catch(function(error) {
        			alert(error.error_description);
        		});
        }
    }
})();