'use strict';

angular.module('ngRUAApp', [
    'ngRoute',
    'ngRUAApp.filters',
    'ngRUAApp.services',
    'ngRUAApp.directives',
    'ngRUAApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'})
        .when('/esempio', {templateUrl: 'partials/esempio.html', controller: 'EsempioController'})
        .otherwise({redirectTo: '/home'});
}]);
