'use strict';

angular.module('ngKarmaApp.filters', []).
    filter('ValutaFilter', function() {
        return function(input) {
            return "(EUR) " + input;
        };
    });