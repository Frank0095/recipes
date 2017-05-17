(function(){
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController)

    AppController.$inject = [];

    function AppController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();