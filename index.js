const createiveAssignemnt = angular.module('creative-assignment', []);
createiveAssignemnt.controller('MainController', function($scope) {
        $scope.test = 'Testing scope';
        $scope.rock = 'ROCK';
        $scope.paper = 'PAPER';
        $scope.scissors = 'SCISSORS';
        $scope.score = {
            user: 10,
            computer: 15
        }
    })
    .directive('rpsoption', function() {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                type: '='
            },
            templateUrl: 'rps-option.html'
        }
    })