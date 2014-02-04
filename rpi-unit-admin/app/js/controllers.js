'use strict';

angular.module('ngRUAApp.controllers', []).
    controller('HomeController', ['$scope',  
        function($scope) {            
        }
    ]).
    controller('DeviceTypeListController', ['$scope', 'CRUDModelFactory', 
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
    ]).
    controller('DeviceTypeDetailController', ['$scope', '$routeParams', 'CRUDModelFactory', 
        function($scope, $routeParams, CRUDModelFactory) {                        
            var modelKey = 'device_type';
            
            $scope.get = function(id) {
                CRUDModelFactory.get(modelKey, id).then(function(results) {                
                    $scope.data = results[0];
                }, 
                function(err) {                
                    $scope.err = err;
                });                
            };
            
            $scope.create = function() {
                $scope.data = {};
                $scope.data.name = '';
            };
            
            $scope.action = $routeParams.action;
                        
            if ('create' === $scope.action) {
                $scope.create();
            } else if ('edit' === $scope.action) {                
                $scope.get($routeParams.id);           
            }                        
        }
    ]);
            