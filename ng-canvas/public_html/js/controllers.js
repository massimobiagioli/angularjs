'use strict';

angular.module('ngCanvasApp.controllers', []).
    controller('HomeController', ['$scope',  
        function($scope) {
            //TODO 
        }
    ]).
    controller('Lezione1Controller', ['$scope', 'DataLoaderFactory',  
        function($scope, DataLoaderFactory) {
            var data = DataLoaderFactory.loadMockData(),
                layer;
            
            $scope.stage = new Kinetic.Stage(data.stage);
            
            layer = new Kinetic.Layer();
            
            _.each(data.shapes, function(shapeData) {
                layer.add(new Kinetic[shapeData.type](shapeData));
            });
            
            $scope.stage.add(layer);
            
            // inizializza filtri
            $scope.cod = '';
            $scope.des = '';
            
            // filtra le forme in funzione dei metadati
            $scope.executeFilter = function() {
                _.each($scope.stage.children[0].children, function(shape) {
                    var show = true;
                    
                    if ($scope.cod) {
                        show = shape.attrs.metadata.cod.indexOf($scope.cod) !== -1;
                    }
                    if (show && $scope.des) {
                        show = shape.attrs.metadata.des.indexOf($scope.des) !== -1;
                    }
                    if (show) {
                        shape.show();
                    } else {
                        shape.hide();
                    }
                });
                
                $scope.stage.draw();
            };
        }
    ]);