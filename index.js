const createiveAssignemnt = angular.module('creative-assignment', []);
createiveAssignemnt.controller('MainController', function($scope) {
    $scope.test = 'Testing scope';
    $scope.score = {
        user: 10,
        computer: 15
    }
});