(function() {

    'use strict';

    angular.module('app')
        .controller('AppController', AppController);

    function AppController(CarouselService) {

        //////////////
        var vm = this;
        //////////////

        vm.message = "AppController message!!!";

        function init() {
            console.log("AppController");
            console.log(CarouselService.getInfo());
        }
        init();
    }

})();