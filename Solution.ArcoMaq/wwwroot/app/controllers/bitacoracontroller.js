app = angular.module('arcomaqapp')
app.controller('bitacoraController', ['$scope', '$rootScope', '$http', 'bitacoraService', function ($scope, $rootScope, $http, svc) {
    $scope.bitacoras = [];
    $scope.obtenerBitacoras = function () {
        svc.obtenerBitacoras().then(function (resp) {
            $scope.bitacoras = resp.data;
        })
    }
}]);

