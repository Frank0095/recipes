(function(){
    'use strict';

    angular
        .module('app')
        .controller('FinalController', FinalController)

    FinalController.$inject = ['$state'];

    function FinalController($state) {
        var vm = this;
    }
})();