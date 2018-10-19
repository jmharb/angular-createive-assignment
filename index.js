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

        function play() { // FIXME: wire to the "go" button
            const USER_WINS = 0;
            const COMP_WINS = 1;
            const TIE = 2;
            
            var userGuess = 0; // FIXME: tie user guess to UI event
            var computerGuess = Math.floor(Math.random() * 3); 
            var result;
            
            if (userGuess == $scope.rock && computerGuess == $scope.scissors ||
                userGuess == $scope.scissors && computerGuess == $scope.paper ||
                userGuess == $scope.paper && computerGuess == $scope.rock) {
                $scope.score.user++;
                result = USER_WINS;
            }
            else if (userGuess == computerGuess) {
                result = TIE;
            }
            else {
                $scope.score.computer++;
                result = COMP_WINS;
            }
            
            displayResult(result);
        }
        
        function displayResult(result) {
            // FIXME: needs implementation
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
