'use strict';

angular.module('ngRUAApp.controllers', []).
    controller('HomeController', ['$scope',  
        function($scope) {            
        }
    ]).
    controller('DeviceTypeController', ['$scope', 'CRUDModelFactory', 
        function($scope, CRUDModelFactory) {            
            
            var modelKey = 'device_type';
            
            $scope.list = function() {
                CRUDModelFactory.list(modelKey).then(function(results) {                
                    $scope.data = results;
                }, 
                function(err) {                
                    $scope.err = err;
                });                
            };
            
            $scope.list();            
        }
    ]);
            