(function(){
    'use strict';

    angular
        .module('app')
        .controller('EmergencyContactsController', EmergencyContactsController)

    EmergencyContactsController.$inject = ['$state'];

    function EmergencyContactsController($state) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();