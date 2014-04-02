'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1').
    factory('BaseControllerFactory', function() {
        return {
            init: function($scope) {
                $scope.num1 = 0;
                $scope.num2 = 0;
                $scope.result = 0;
                $scope.sum = function() {
                    $scope.result = $scope.num1 + $scope.num2;
                };
            }
        };
    });
