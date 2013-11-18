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
        .otherwise({redirectTo: '/home'});
}]);