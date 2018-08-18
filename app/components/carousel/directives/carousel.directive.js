(function () {

    'use strict';

    angular.module('sec7.carousel')
        .directive('sec7Carousel', sec7Carousel);

    function sec7Carousel() {
        return {
          restrict: 'E',
          templateUrl: './dist/views/carousel-template.html'
        };
    }
})();