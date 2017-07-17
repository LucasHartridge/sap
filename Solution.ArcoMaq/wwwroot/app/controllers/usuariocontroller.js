app = angular.module('arcomaqapp')
app.controller('usuarioController', ['$scope', '$rootScope', '$http', 'usuarioService', 'AuthenticationService', '$location', function ($scope, $rootScope, $http, svc, AuthenticationService, $location) {
    $scope.crearUsuario = function () {
        //$scope.dataLoading = true;
        //svc.insertarUsuario($scope.usuario);
        //$scope.dataLoading = false;
        $scope.dataLoading = true;
        svc.insertarUsuario($scope.usuario, function (response) {
            if (response.status === 200) {
                AuthenticationService.SetCredentials($scope.usuario.Email, $scope.usuario.Password);
                $location.path('usuariotodos');
            } else if (response.data === "ErrorEmail") {
                $scope.errorcrearusuario = "El email ingresado ya corresponde a un usuario cargado";
                $scope.dataLoading = false;
            }
            else if (response.data === "ErrorDNI") {
                $scope.errorcrearusuario = "El DNI ingresado ya corresponde a un usuario cargado";
                $scope.dataLoading = false;
            }
        });
    }

    //AuthenticationService.ClearCredentials();
    $scope.login = function () {
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.usuario, function (response) {
            //if (response.success) {
            if (response.status === 200) {
                AuthenticationService.SetCredentials($scope.usuario.Email, $scope.usuario.Password);
                $location.path('usuariotodos');
            } else if (response.data === "ErrorEmail") {
                $scope.errorlogin = "El email ingresado no corresponse a ningun usuario registrado";
                $scope.dataLoading = false;
            }
            else if (response.data === "ErrorPassword") {
                $scope.errorlogin = "La contraseña ingresada es incorrecta";
                $scope.dataLoading = false;
            }
        });
    }

    $scope.logout = function () {
        AuthenticationService.ClearCredentials();
        $location.path('usuariologin');
    }
    $scope.usuarios = [];
    $scope.obtenerUsuarios = function () {
        svc.obtenerUsuarios().then(function (resp) {
            $scope.usuarios = resp.data;
        })
    }
}]);




