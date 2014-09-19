//
angular.module('angularDevise.controllers').controller('HomeController', ['$scope', '$location', 'Session', function($scope, $location, Session) {

  $scope.usersigned_in = function() {
    return Session.signedOut
  };
}]);