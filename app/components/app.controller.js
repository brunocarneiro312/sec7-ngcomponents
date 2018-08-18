(function() {

    'use strict';

    angular.module('app')
        .controller('AppController', AppController);

    function AppController() {

        //////////////
        var vm = this;
        //////////////

        function init() {
            console.log("AppController");
        }
        init();
    }

})();