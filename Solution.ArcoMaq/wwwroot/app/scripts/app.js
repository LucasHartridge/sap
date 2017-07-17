var app = angular.module('arcomaqapp', ["ngRoute", "ngCookies"])
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/views/inicio/home.html",
            controller: 'usuarioController'
        })
        .when("/usuariocrear", {
            templateUrl: "app/views/usuario/registrarse.html",
            controller: 'usuarioController'
        })
        .when("/usuariologin", {
            templateUrl: "app/views/usuario/login.html",
            controller: 'usuarioController',
        })
        .when("/usuariotodos", {
            templateUrl: "app/views/usuario/lista.html",
            controller: 'usuarioController',
        })
        .when("/bitacoratodas", {
            templateUrl: "app/views/admin/bitacora/lista.html",
            controller: 'bitacoraController',
        })
    //$routeProvider.otherwise({ redirectTo: "/home" });
});


app.run(['$rootScope', '$location', '$cookieStore', '$http', '$window',
    function ($rootScope, $location, $cookieStore, $http, $window) {
        // keep user logged in after page refresh
        $rootScope.usuario = $cookieStore.get('usuario') || {};

        if ($rootScope.usuario) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.usuario.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/usuariologin' && !$rootScope.usuario.email) {
                if ($location.path() !== '/usuariocrear') {
                    if ($location.path() !== '/home') {
                        $location.path('usuariologin');
                    }
                }
            }
            if (($location.path() == '/usuariologin' || $location.path() == '/usuariocrear') && $rootScope.usuario.email) {
                $location.path('usuariotodos');
            }
        });
    }]);