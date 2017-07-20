(function () {
    'use strict';

    angular
        .module('app')
        .controller('WizardController', WizardController)

    WizardController.$inject = ['$state'];

    function WizardController($state) {
        var vm = this;

        vm.steps = [
            {
                state: 'wizard.patient-detail',
                name: 'Patient Information',
                done: false
            },
            {
                state: 'wizard.emergency-contact',
                name: 'Emergency Contacts',
                done: false
            },
            {
                state: 'wizard.confirm',
                name: 'Confirm',
                done: false
            }
        ];
        vm.currentStep = vm.steps.map(s => s.state).indexOf($state.current.name);
        vm.progress = function() {
            return Math.round((vm.currentStep + 1) / vm.steps.length * 100);
        };

        vm.next = function () {
            if (vm.currentStep < vm.steps.length - 1) {
                vm.steps[vm.currentStep].done = true;
                vm.currentStep++;
                $state.go(vm.steps[vm.currentStep].state);
            }
        };

        vm.previous = function () {
            vm.steps[vm.currentStep].done = false;
            if (vm.currentStep > 0) {
                vm.currentStep--;
                $state.go(vm.steps[vm.currentStep].state);
            }
        };
    }
})();