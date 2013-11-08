'use strict';

angular.module('ngCanvasApp', [
    'ngRoute',
    'ngCanvasApp.filters',
    'ngCanvasApp.services',
    'ngCanvasApp.directives',
    'ngCanvasApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/lezione1', {templateUrl: 'partials/lezione1.html', controller: 'Lezione1Controller'})
        .when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'})
        .otherwise({redirectTo: '/home'});
}]);