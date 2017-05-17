(function () {
    'use strict';

    angular.module('app', [
            // Angular modules

            // Custom modules
            'app.auth',
            'app.core',
            'app.login',
            'app.purchase',

            // 3rd Party Modules
            'ui.router',
            'LocalStorageModule',
            'stripe.checkout',
            'oitozero.ngSweetAlert'
        ])
        .value('apiUrl', 'http://localhost:8080/api/')
        .config(function ($urlRouterProvider, $stateProvider, $httpProvider, StripeCheckoutProvider) {
            StripeCheckoutProvider.defaults({
                key: 'pk_test_Ur3KTMjAf679YHgFTTnqXbzd'
            })

            $httpProvider.interceptors.push('authInterceptorService');

            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'LoginController as loginCtrl',
                    templateUrl: 'app/login/login.html'
                })
                .state('app', {
                    url: '/app',
                    controller: 'AppController as appCtrl',
                    templateUrl: 'app/app.html'
                })
                .state('app.purchase', {
                    url: '/purchase',
                    controller: 'PurchaseController as purchaseCtrl',
                    templateUrl: 'app/purchase/purchase.html'
                });
        })
        .run(function($log, StripeCheckout) {
          // You can set defaults here, too.
          StripeCheckout.defaults({
            opened: function() {
              $log.debug("Stripe Checkout opened");
            },
            closed: function() {
              $log.debug("Stripe Checkout closed");
            }
          });
        });
})();