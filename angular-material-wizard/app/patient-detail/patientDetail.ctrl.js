(function () {
    'use strict';

    angular
        .module('app')
        .controller('PatientDetailController', PatientDetailController)

    PatientDetailController.$inject = ['$state', '$stateParams'];

    function PatientDetailController($state, $stateParams) {
        var vm = this;

        if ($stateParams.id) {
            vm.new = false;
        } else {
            vm.new = true;
        }
    }
})();