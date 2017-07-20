(function(){
    'use strict';

    angular
        .module('app')
        .controller('ConfirmController', ConfirmController)

    ConfirmController.$inject = ['$state'];

    function ConfirmController($state) {
        var vm = this;
    }
})();