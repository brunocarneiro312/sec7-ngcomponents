(function() {

    'use strict';

    angular.module('app')
        .controller('AppController', AppController);

    function AppController() {

        //////////////
        var vm = this;
        //////////////

        vm.message = "AppController message!!!";

        function init() {
            console.log("AppController");
        }
        init();
    }

})();