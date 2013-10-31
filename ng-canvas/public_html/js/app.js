'use strict';

angular.module('ngCanvasApp', [
    'ngRoute',
    'ngCanvasApp.filters',
    'ngCanvasApp.services',
    'ngCanvasApp.directives',
    'ngCanvasApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/viewer', {templateUrl: 'partials/viewer.html', controller: 'ViewerController'})
        .when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'})
        .otherwise({redirectTo: '/home'});
}]);