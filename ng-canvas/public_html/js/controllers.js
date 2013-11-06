'use strict';

angular.module('ngCanvasApp.controllers', []).
    controller('HomeController', ['$scope',  
        function($scope) {
            //TODO 
        }
    ]).
    controller('ViewerController', ['$scope', 'DataLoaderFactory',  
        function($scope, DataLoaderFactory) {
            var data = DataLoaderFactory.loadMockData(),
                layer;
            
            $scope.stage = new Kinetic.Stage(data.stage);
            
            layer = new Kinetic.Layer();
            
            _.each(data.shapes, function(shapeData) {
                layer.add(new Kinetic[shapeData.type](shapeData));
            });
            
            $scope.stage.add(layer);
        }
    ]);