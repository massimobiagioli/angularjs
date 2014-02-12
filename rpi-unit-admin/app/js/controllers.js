'use strict';

angular.module('ngRUAApp.controllers', []).
    controller('HomeController', ['$scope',  
        function($scope) {            
        }
    ]).
    controller('DeviceTypeListController', ['$scope', '$location', 'CRUDModelFactory', 
        function($scope, $location, CRUDModelFactory) {                        
            var modelKey = 'device_type';
            
            $scope.list = function() {
                CRUDModelFactory.list(modelKey).then(function(results) {                
                    $scope.data = results;
                }, 
                function(err) {                
                    $scope.err = err;
                });                
            };
            
            $scope.navigateToCreate = function() {
                $location.path('/deviceTypeDetail/create');
            };
            
            $scope.list();            
        }
    ]).
    controller('DeviceTypeDetailController', ['$scope', '$location', '$routeParams', 'CRUDModelFactory', 
        function($scope, $location, $routeParams, CRUDModelFactory) {                        
            var modelKey = 'device_type';

            var navigateToList = function() {
                $location.path('/deviceTypeList');
            };                       
            
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
            
            $scope.ok = function() {
                if ('create' === $scope.action) {
                    CRUDModelFactory.insert(modelKey, $scope.data).then(function(results) {                
                        $scope.data = results;
                    }, 
                    function(err) {                
                        $scope.err = err;
                    }); 
                } else if ('edit' === $scope.action) { 
                    CRUDModelFactory.update(modelKey, $scope.data).then(function(results) {                
                        $scope.data = results;
                    }, 
                    function(err) {                
                        $scope.err = err;
                    });  
                }   
                navigateToList();
            };
            
            $scope.remove = function() {                
                CRUDModelFactory.remove(modelKey, $scope.data.id).then(function(results) {                
                    $scope.data = results;
                }, 
                function(err) {                
                    $scope.err = err;
                });  
                   
                navigateToList();
            };
            
            $scope.cancel = function() {
                navigateToList();
            };
                        
            $scope.action = $routeParams.action;
                        
            if ('create' === $scope.action) {
                $scope.create();
            } else if ('edit' === $scope.action) {                
                $scope.get($routeParams.id);           
            }                        
        }
    ]);
            