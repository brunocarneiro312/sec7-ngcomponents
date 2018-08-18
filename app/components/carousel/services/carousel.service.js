(function () {

    'use strict';

    angular.module('sec7.carousel')
        .service('CarouselService', CarouselService);

    function CarouselService() {

        //////////////
        var vm = this;
        //////////////

        vm.getInfo = getInfo;

        function init() {
            console.log("CarouselService");
        }
        init();

        function getInfo() {
            return "CarouselService 1.0";
        }
    }

})();