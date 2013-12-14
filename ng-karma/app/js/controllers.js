'use strict';

angular.module('ngKarmaApp.controllers', []).
    controller('HomeController', ['$scope',  
        function($scope) {
            //TODO 
        }
    ]).
    controller('EsempioController', ['$scope', 'EsempioFactory',  
        function($scope, EsempioFactory) {
            $scope.data = EsempioFactory.loadMockData();
            $scope.filters = {};
            
            $scope.search = function(articolo) {
                var result = true;
                
                if ($scope.filters.cod) {
                    result = (-1 !== articolo.cod.indexOf($scope.filters.cod));
                }
                
                if (result && $scope.filters.des) {
                    result = (-1 !== articolo.des.indexOf($scope.filters.des));
                }

                if (result && $scope.filters.prezzo_unitario) {
                    result = (articolo.prezzo_unitario <= $scope.filters.prezzo_unitario);
                }

                return result;
            };
        }
    ]);
            