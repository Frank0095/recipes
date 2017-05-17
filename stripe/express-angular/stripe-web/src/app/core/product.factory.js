(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('productFactory', productFactory)

    productFactory.$inject = ['$http', 'apiUrl'];

    function productFactory($http, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                .get(apiUrl + 'products')
                .then(function(response) {
                    return response.data;
                });
        }
        function getById(id) {
            return $http
                .get(apiUrl + 'products/' + id)
                .then(function(response) {
                    return response.data;
                });
        }
        function create(product) {
            return $http
                .post(apiUrl + 'products', product)
                .then(function(response) {
                    return response.data;
                });
        }
        function update(product) {
            return $http
                .put(apiUrl + 'products/' + id, product)
                .then(function(response) {
                    return response.data;
                });
        }
        function remove(product) {
            return $http
                .delete(apiUrl + 'products/' + id)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();