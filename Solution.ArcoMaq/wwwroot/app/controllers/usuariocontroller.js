app = angular.module('arcomaqapp')
app.controller('usuarioController', ['$scope', '$rootScope', '$http', 'usuarioService', 'AuthenticationService', '$location', function ($scope, $rootScope, $http, svc, AuthenticationService, $location) {
    $scope.crearUsuario = function () {
        $scope.dataLoading = true;
        svc.insertarUsuario($scope.usuario);
        $scope.dataLoading = false;
    }
    $scope.crearUsuario = function () {
        $scope.dataLoading = true;
        svc.insertarUsuario($scope.usuario);
        $scope.dataLoading = false;
    }

    AuthenticationService.ClearCredentials();
    $scope.login = function () {
        $scope.dataLoading = true;
        //var email = $scope.usuario.email;
        //var password = $scope.usuario.password;
        AuthenticationService.Login($scope.usuario, function (response) {
        //AuthenticationService.Login($scope.usuario.Email,$scope.usuario.Password, function (response) {
            //if (response.success) {
            if (response.status = 200) {
                //AuthenticationService.SetCredentials($scope.usuario.email, $scope.usuario.password);
                AuthenticationService.SetCredentials($scope.usuario.Email, $scope.usuario.Password);
                $location.path('usuariotodos');
            } else {
                $scope.error = response.message;
                $scope.dataLoading = false;
            }
        });
    }
}]);




