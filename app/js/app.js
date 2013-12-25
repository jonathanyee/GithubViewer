'use strict';


// Declare app level module which depends on filters, and services
angular.module('GithubViewer', [
  'ngRoute',
  'GithubViewer.filters',
  'GithubViewer.services',
  'GithubViewer.directives',
  'GithubViewer.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/main.html',
    controller: 'SearchControl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
