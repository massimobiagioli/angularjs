'use strict';

angular.module('ngCanvasApp.controllers', []).
    controller('HomeController', ['$scope',  
        function($scope) {
            //TODO 
        }
    ]).
    controller('Lezione1Controller', ['$scope', 'Lezione1Factory',  
        function($scope, Lezione1Factory) {
            var data = Lezione1Factory.loadMockData(),
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
    ]).
    controller('Lezione2Controller', ['$scope', 'Lezione2Factory',  
        function($scope, Lezione2Factory) {
            var data = Lezione2Factory.loadMockData(),
                newLayer,
                shapeLayer,
                i,
                shapeTmpData;
            
            $scope.stage = new Kinetic.Stage(data.stage);
            
            _.each(data.layers, function(layer) {
                newLayer = new Kinetic.Layer();
                if (_.has(layer, "shapes")) {
                    shapeLayer = layer;
                    _.each(layer.shapes, function(shapeData) {
                        newLayer.add(new Kinetic[shapeData.type](shapeData));
                    });
                } else if (_.has(layer, "fillings")) {
                    for (i = 0; i < layer.fillings.length; i++) {
                        shapeTmpData = shapeLayer.shapes[i];
                        if (shapeTmpData.type === "Rect") {
                            shapeTmpData.width = Math.round(shapeTmpData.width * layer.fillings[i] / 100);
                            shapeTmpData.fill = 'blue';
                        } else {
                            // TODO gestire le altre forme ...
                        }
                        newLayer.add(new Kinetic[shapeTmpData.type](shapeTmpData));
                    }
                }
                $scope.stage.add(newLayer);
            });
            
        }
    ]);
            