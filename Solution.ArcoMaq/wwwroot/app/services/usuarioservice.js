angular.module('arcomaqapp').factory('usuarioService', function ($http) {
    return {
        insertarUsuario: function (usuario, callback) {
            $http({
                method: "POST",
                url: '/api/usuarioapi/crearUsuario',
                data: usuario
            }).then(function successCallback(response) {
                callback(response);
            }, function errorCallback(response) {
                callback(response);
            });

            //return $http({
            //    method: 'POST',
            //    url: '/api/usuarioapi/crearUsuario',
            //    data: usuario
            //});
        },
        obtenerUsuarios: function () {
            return $http({
                method: 'GET',
                url: '/api/usuarioapi/obtenerUsuarios',
            });
        },


    };
});


