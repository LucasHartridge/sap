angular.module('arcomaqapp').factory('bitacoraService', function ($http) {
    return {
        obtenerBitacoras: function () {
            return $http({
                method: 'GET',
                url: '/api/bitacoraapi/obtenerBitacoras',
            });
        },
    };
});