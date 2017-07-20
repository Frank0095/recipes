(function () {
    'use strict';

    angular.module('app', [
        // Angular modules

        // Custom modules

        // 3rd Party Modules
        'ui.router'
    ]).config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/splash');

        $stateProvider.state('splash', {
            url: '/splash',
            controller: 'SplashController as splashCtrl',
            templateUrl: '/app/splash/splash.html'
        });
        
        $stateProvider.state('wizard', {
            url: '/wizard',
            controller: 'WizardController as wizardCtrl',
            templateUrl: '/app/wizard/wizard.html'
        });

        $stateProvider.state('wizard.patient-detail', {
            url: '/patient?patientId',
            controller: 'PatientDetailController as patientDetailCtrl',
            templateUrl: '/app/patient-detail/patientDetail.html'
        });

        $stateProvider.state('wizard.emergency-contact', {
            url: '/emergency?patientId',
            controller: 'EmergencyContactsController as emergencyContactsCtrl',
            templateUrl: '/app/emergency-contacts/emergencyContacts.html'
        });

        $stateProvider.state('wizard.confirm', {
            url: '/confirm?visitId',
            controller: 'ConfirmController as confirmCtrl',
            templateUrl: '/app/confirm/confirm.html'
        });
    });
})();