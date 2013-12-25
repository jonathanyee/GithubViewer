'use strict';

/* Controllers */

angular.module('GithubViewer.controllers', []).
  controller('SearchControl', ['$scope', '$http',
    function($scope, $http) {
        $scope.user = '';

        $scope.search = function() {
            if ($scope.user.length > 2) {
                $http.get('https://api.github.com/users/' + $scope.user + '/repos').
                    success(function(data) {
                        $scope.repositories = data;
                        var languages = [];
                        $scope.languageFilter = [];

                        for (var i = 0; i < data.length; i++) {
                            // only add a language once
                            if (data[i].language !== null &&
                                languages.indexOf(data[i].language) === -1) {
                                    languages.push(data[i].language);
                                    $scope.languageFilter.push({
                                        name : data[i].language,
                                        selected : true
                                    });
                            }
                        }
                    });
            }
        };
  }]);