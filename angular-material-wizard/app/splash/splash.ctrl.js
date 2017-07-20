(function(){
    'use strict';

    angular
        .module('app')
        .controller('SplashController', SplashController)

    SplashController.$inject = ['$state'];

    function SplashController($state) {
        var vm = this;
    }
})();