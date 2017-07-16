(function () {
    'use strict';

    angular
        .module('app')
        .controller('bitacoracontroller', bitacoracontroller);

    bitacoracontroller.$inject = ['$location'];

    function bitacoracontroller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'bitacoracontroller';

        activate();

        function activate() { }
    }
})();
