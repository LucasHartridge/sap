angular.module('arcomaqapp').factory('usuarioService', function ($http) {
    return {
        insertarUsuario: function (usuario) {
            return $http({
                method: 'POST',
                url: '/api/usuarioapi/crearUsuario',
                data: usuario
            });
        },

    };
});


