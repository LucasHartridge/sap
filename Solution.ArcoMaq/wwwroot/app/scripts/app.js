//'use strict';

//// declare modules
//angular.module('Authentication', []);
//angular.module('Home', []);

//angular.module('BasicHttpAuthExample', [
//    'Authentication',
//    'Home',
//    'ngRoute',
//    'ngCookies'
//])

//.config(['$routeProvider', function ($routeProvider) {

//    $routeProvider
//        .when('/login', {
//            controller: 'LoginController',
//            templateUrl: 'modules/authentication/views/login.html',
//            hideMenus: true
//        })

//        .when('/', {
//            controller: 'HomeController',
//            templateUrl: 'modules/home/views/home.html'
//        })

//        .otherwise({ redirectTo: '/login' });
//}])

//.run(['$rootScope', '$location', '$cookieStore', '$http',
//    function ($rootScope, $location, $cookieStore, $http) {
//        // keep user logged in after page refresh
//        $rootScope.globals = $cookieStore.get('globals') || {};
//        if ($rootScope.globals.currentUser) {
//            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//        }

//        $rootScope.$on('$locationChangeStart', function (event, next, current) {
//            // redirect to login page if not logged in
//            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
//                $location.path('/login');
//            }
//        });
//    }]);


var app = angular.module('arcomaqapp', ["ngRoute", "ngCookies"])
app.config(function ($routeProvider,$locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/views/inicio/home.html",
            //controller: 'homeController'
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
            templateUrl: "app/views/bitacora/lista.html",
            controller: 'bitacoraController',
        })
    $routeProvider.otherwise({ redirectTo: "/home" });
});


app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals');
 
        //$rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/usuariologin' && !$rootScope.globals) {
                $location.path('usuariologin');
            }
        });
    }]);