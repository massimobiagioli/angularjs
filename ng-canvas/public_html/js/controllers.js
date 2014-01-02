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
            
            // Inizializza flag per abilitazione layers
            $scope.fillingLayer = true;
            
            // Disegna layers
            _.each(data.layers, function(layer) {
                newLayer = new Kinetic.Layer();
                newLayer.metadata = {};
                
                if (_.has(layer, "shapes")) {
                    newLayer.metadata.type = "main";
                    shapeLayer = layer;
                    _.each(layer.shapes, function(shapeData) {
                        newLayer.add(new Kinetic[shapeData.type](shapeData));
                    });
                } else if (_.has(layer, "fillings")) {
                    newLayer.metadata.type = "filling";
                    
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
            
            // Gestione abilitazione layers
            $scope.enableLayers = function() {
                _.each($scope.stage.children, function(layer) {
                   if (layer.metadata.type === "filling") {
                       if ($scope.fillingLayer) {
                           layer.show();
                       } else {
                           layer.hide();
                       }
                   } 
                });
            };
            
        }
    ]).
    controller('Lezione3Controller', ['$scope', 'Lezione3Factory',  
        function($scope, Lezione3Factory) {
            var data = Lezione3Factory.loadMockData(),
                layer,                
                background;
            
            $scope.stage = new Kinetic.Stage(data.stage);
            
            layer = new Kinetic.Layer();
            layer.setDraggable("draggable");
            
            background = new Kinetic.Rect({
                x: -1000,
                y: -1000,
                width: 2000,
                height: 2000,
                fill: "#000000",
                opacity: 0
            });
            
            layer.add(background);
            
            _.each(data.shapes, function(shapeData) {
                layer.add(new Kinetic[shapeData.type](shapeData));
            });
            
            $scope.stage.add(layer);
            
            $scope.zoom = 100;
            
            $scope.changeZoom = function() {
                layer.setScale($scope.zoom / 100);
                layer.draw();
            };
        }
    ]);