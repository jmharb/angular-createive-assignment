const creativeAssignment = angular.module('creative-assignment', []);
creativeAssignment.controller('MainController', function($scope) {
        $scope.test = 'Testing scope';
        $scope.rock = 'ROCK';
        $scope.paper = 'PAPER';
        $scope.scissors = 'SCISSORS';
        $scope.score = {
            user: 10,
            computer: 15
        }

        function play(userGuess, computerGuess) {
            const USER_WINS = 0;
            const COMP_WINS = 1;
            const TIE = 2;

            if (userGuess == $scope.rock && computerGuess == $scope.scissors ||
                userGuess == $scope.scissors && computerGuess == $scope.paper ||
                userGuess == $scope.paper && computerGuess == $scope.rock) {
                $scope.score.user++;
                return USER_WINS;
            }
            else if (userGuess == computerGuess) {
                return TIE;
            }
            else {
                $scope.score.computer++;
                return COMP_WINS;
            }
        }

        function getCompGuess() {
            return Math.floor(Math.random() * 3);
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
