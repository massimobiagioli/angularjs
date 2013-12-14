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
            console.log($scope.data);
        }
    ]);
            