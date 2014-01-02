'use strict';

angular.module('ngCanvasApp', [
    'ngRoute',
    'ngCanvasApp.filters',
    'ngCanvasApp.services',
    'ngCanvasApp.directives',
    'ngCanvasApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'})
        .when('/lezione1', {templateUrl: 'partials/lezione1.html', controller: 'Lezione1Controller'})
        .when('/lezione2', {templateUrl: 'partials/lezione2.html', controller: 'Lezione2Controller'})
        .when('/lezione3', {templateUrl: 'partials/lezione3.html', controller: 'Lezione3Controller'})
        .otherwise({redirectTo: '/home'});
}]);