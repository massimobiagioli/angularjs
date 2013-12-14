'use strict';

angular.module('ngKarmaApp', [
    'ngRoute',
    'ngKarmaApp.filters',
    'ngKarmaApp.services',
    'ngKarmaApp.directives',
    'ngKarmaApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'})
        .when('/esempio', {templateUrl: 'partials/esempio.html', controller: 'EsempioController'})
        .otherwise({redirectTo: '/home'});
}]);
